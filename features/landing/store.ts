import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { DEFAULT_LANDING_CONTENT } from '@/features/landing/content-seed';
import type { LandingContent } from '@/features/landing/types';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'data', 'landing-content.json');

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null;
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isMediaAsset(value: unknown): boolean {
  return isRecord(value) && isString(value.src) && isString(value.alt);
}

function isValueItem(value: unknown): boolean {
  return isRecord(value) && isString(value.title) && isString(value.description);
}

function isCapabilityItem(value: unknown): boolean {
  return isValueItem(value);
}

function isApiMatrixItem(value: unknown): boolean {
  return isRecord(value) && isString(value.audience) && isString(value.capability);
}

function isNavItem(value: unknown): boolean {
  return isRecord(value) && isString(value.href) && isString(value.label);
}

function isSectionCopy(value: unknown): boolean {
  return isRecord(value) && isString(value.title) && isString(value.body);
}

export function isLandingContent(value: unknown): value is LandingContent {
  if (!isRecord(value)) {
    return false;
  }

  return (
    Array.isArray(value.navigation) &&
    value.navigation.every(isNavItem) &&
    isRecord(value.hero) &&
    isString(value.hero.title) &&
    isString(value.hero.subtitle) &&
    isString(value.hero.cta) &&
    Array.isArray(value.hero.pillars) &&
    value.hero.pillars.every(isValueItem) &&
    isMediaAsset(value.hero.media) &&
    isSectionCopy(value.dna) &&
    isSectionCopy(value.problem) &&
    isSectionCopy(value.platform) &&
    isRecord(value.banks) &&
    isString(value.banks.title) &&
    isString(value.banks.subtitle) &&
    Array.isArray(value.banks.values) &&
    value.banks.values.every(isValueItem) &&
    isMediaAsset(value.banks.media) &&
    isRecord(value.insurers) &&
    isString(value.insurers.title) &&
    isString(value.insurers.subtitle) &&
    Array.isArray(value.insurers.productControl) &&
    value.insurers.productControl.every(isCapabilityItem) &&
    Array.isArray(value.insurers.salesControl) &&
    value.insurers.salesControl.every(isCapabilityItem) &&
    Array.isArray(value.insurers.integrations) &&
    value.insurers.integrations.every(isCapabilityItem) &&
    isMediaAsset(value.insurers.media) &&
    isRecord(value.technology) &&
    isString(value.technology.title) &&
    isString(value.technology.body) &&
    Array.isArray(value.technology.matrix) &&
    value.technology.matrix.every(isApiMatrixItem) &&
    Array.isArray(value.technology.components) &&
    value.technology.components.every(isValueItem) &&
    isMediaAsset(value.technology.media) &&
    isSectionCopy(value.cta)
  );
}

export function serializeLandingContent(content: LandingContent): string {
  return JSON.stringify(content, null, 2);
}

async function readPersistedContent(): Promise<LandingContent | null> {
  try {
    const raw = await readFile(CONTENT_FILE_PATH, 'utf8');
    const parsed = JSON.parse(raw) as unknown;

    return isLandingContent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export async function loadLandingContent(): Promise<LandingContent> {
  const persistedContent = await readPersistedContent();

  return persistedContent ?? DEFAULT_LANDING_CONTENT;
}

export async function saveLandingContent(content: LandingContent): Promise<void> {
  await mkdir(path.dirname(CONTENT_FILE_PATH), { recursive: true });
  await writeFile(CONTENT_FILE_PATH, serializeLandingContent(content), 'utf8');
}
