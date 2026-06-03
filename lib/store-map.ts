import brazilMap from "@svg-maps/brazil";
import { stores, stateNames, type Store } from "@/lib/stores";

type BrazilMapLocation = {
  id: string;
  name: string;
  path: string;
};

const mapData = brazilMap as {
  viewBox: string;
  locations: BrazilMapLocation[];
};

export const MAP_VIEW_BOX = mapData.viewBox;

/** Centro aproximado de cada UF no sistema de coordenadas do SVG */
const STATE_CENTERS: Record<string, { x: number; y: number }> = {
  ES: { x: 518, y: 418 },
  RS: { x: 335, y: 595 },
  SP: { x: 410, y: 510 },
  RJ: { x: 472, y: 465 },
  GO: { x: 395, y: 365 },
  PA: { x: 340, y: 245 },
  PI: { x: 515, y: 195 },
};

export type StoreMarker = Store & { x: number; y: number };

export type StateSummary = {
  uf: string;
  id: string;
  name: string;
  path: string;
  storeCount: number;
  stores: Store[];
};

function ufToMapId(uf: string) {
  return uf.toLowerCase();
}

function markerPosition(uf: string, index: number, total: number) {
  const center = STATE_CENTERS[uf];
  if (!center) return { x: 0, y: 0 };

  if (total <= 1) return center;

  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const radius = 6 + Math.min(total, 12) * 2.2;

  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius,
  };
}

export function getStoreMarkers(): StoreMarker[] {
  const grouped = getStoresByStateMap();

  return Object.entries(grouped).flatMap(([uf, stateStores]) =>
    stateStores.map((store, index) => ({
      ...store,
      ...markerPosition(uf, index, stateStores.length),
    }))
  );
}

export function getStoresByStateMap(): Record<string, Store[]> {
  const grouped: Record<string, Store[]> = {};
  for (const store of stores) {
    if (!grouped[store.estado]) grouped[store.estado] = [];
    grouped[store.estado].push(store);
  }
  return grouped;
}

export function getActiveStateSummaries(): StateSummary[] {
  const grouped = getStoresByStateMap();
  const locationById = new Map(mapData.locations.map((loc) => [loc.id, loc]));

  return Object.entries(grouped)
    .map(([uf, stateStores]) => {
      const id = ufToMapId(uf);
      const location = locationById.get(id);
      if (!location) return null;

      return {
        uf,
        id,
        name: stateNames[uf] ?? location.name,
        path: location.path,
        storeCount: stateStores.length,
        stores: stateStores,
      };
    })
    .filter((item): item is StateSummary => item !== null)
    .sort((a, b) => b.storeCount - a.storeCount);
}

export type MapStatePath = {
  id: string;
  name: string;
  path: string;
  hasStores: boolean;
  uf: string;
};

export function getAllStatePaths(): MapStatePath[] {
  const activeIds = new Set(getActiveStateSummaries().map((s) => s.id));

  return mapData.locations.map((location) => ({
    ...location,
    hasStores: activeIds.has(location.id),
    uf: location.id.toUpperCase(),
  }));
}

export function getStateSummaryById(id: string | null): StateSummary | null {
  if (!id) return null;
  return getActiveStateSummaries().find((state) => state.id === id) ?? null;
}

export const activeStateCount = Object.keys(getStoresByStateMap()).length;
