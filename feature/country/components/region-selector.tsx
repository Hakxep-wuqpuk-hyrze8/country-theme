import React from 'react';
import Selector from '@/components/selector';
import { getAllRegions } from '../query';

export default async function RegionSelector({ currentRegion }: {
  currentRegion: string,
}) {
  const PLACEHOLDER = "Filter by Region";
  const regions = await getAllRegions();
  const regionsSet = new Set(regions.map((country: { region: string }) => country.region))
  const sortedRegion = Array.from(regionsSet).filter(region => region).sort();

  return (
    <Selector current={currentRegion} dataList={sortedRegion} placeholder={PLACEHOLDER} />
  )
}
