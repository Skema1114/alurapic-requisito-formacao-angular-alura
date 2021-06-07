import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformDetectorService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
