// Outdated utility functions
export function legacyUtility(data: any): any {
  // Outdated function with any types
  return data;
}

// Outdated async/await pattern
export async function legacyAsyncFunction(): Promise<any> {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Outdated class with any methods
export class LegacyService {
  private data: any = {};

  constructor(initialData: any) {
    this.data = initialData;
  }

  // Outdated method with any return
  getData(): any {
    return this.data;
  }

  // Outdated method with any parameter
  setData(newData: any): void {
    this.data = newData;
  }
}

// Outdated constants
export const LEGACY_CONSTANTS = {
  API_URL: "https://api.example.com",
  TIMEOUT: 5000,
  RETRY_COUNT: 3,
} as const;
