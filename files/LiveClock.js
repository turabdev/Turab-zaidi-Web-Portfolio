// LiveClock.js - Vanilla JavaScript Live Clock Component with Real Server Time
class LiveClock {
  constructor(elementId, options = {}) {
    this.element = document.getElementById(elementId);
    this.interval = null;
    this.timeOffset = 0; // Offset from server to browser time
    this.options = {
      locale: options.locale || 'en-GB',
      showSeconds: options.showSeconds !== false,
      showDate: options.showDate !== false,
      dateFormat: options.dateFormat || 'short', // 'short' or 'long'
      fontFamily: options.fontFamily || 'monospace',
      color: options.color || '#00ff00',
      useServerTime: options.useServerTime !== false, // Use API for correct time
      ...options
    };

    if (!this.element) {
      console.warn(`LiveClock: Element with id "${elementId}" not found`);
      return;
    }

    this.initStyle();
    
    if (this.options.useServerTime) {
      this.syncWithServer();
    } else {
      this.start();
    }
  }

  initStyle() {
    if (this.options.fontFamily) {
      this.element.style.fontFamily = this.options.fontFamily;
    }
    if (this.options.color) {
      this.element.style.color = this.options.color;
    }
  }

  syncWithServer() {
    // Fetch real time from worldtimeapi.org based on IP
    fetch('https://worldtimeapi.org/api/ip', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        if (data && data.datetime) {
          // Calculate offset between server time and browser time
          const serverTime = new Date(data.datetime);
          const browserTime = new Date();
          this.timeOffset = serverTime.getTime() - browserTime.getTime();
          console.log(`LiveClock: Synced with server. Offset: ${this.timeOffset}ms`);
          this.start();
        } else {
          console.warn('Live Clock: Invalid server response, falling back to browser time');
          this.start();
        }
      })
      .catch(error => {
        console.warn('LiveClock: Server sync failed, using browser time:', error);
        this.start();
      });
  }

  formatTime(date = new Date()) {
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: this.options.showSeconds ? '2-digit' : undefined,
    };
    // Remove undefined properties
    Object.keys(timeOptions).forEach(key => 
      timeOptions[key] === undefined && delete timeOptions[key]
    );
    
    return date.toLocaleTimeString(this.options.locale, timeOptions);
  }

  formatDate(date = new Date()) {
    if (!this.options.showDate) return '';
    
    const dateOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: this.options.dateFormat === 'long' ? 'numeric' : undefined
    };
    // Remove undefined properties
    Object.keys(dateOptions).forEach(key => 
      dateOptions[key] === undefined && delete dateOptions[key]
    );

    return date.toLocaleDateString('en-US', dateOptions);
  }

  update() {
    // Get current time with server offset applied
    const now = new Date(Date.now() + this.timeOffset);
    const time = this.formatTime(now);
    const date = this.formatDate(now);
    
    if (date) {
      this.element.textContent = `${time} • ${date}`;
    } else {
      this.element.textContent = time;
    }
  }

  start() {
    // Update immediately
    this.update();
    
    // Then set interval for updates every 1000ms
    this.interval = setInterval(() => this.update(), 1000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  destroy() {
    this.stop();
    this.element = null;
  }
}

// Auto-initialize if data-liveclock attribute is present
document.addEventListener('DOMContentLoaded', () => {
  const clockElements = document.querySelectorAll('[data-liveclock]');
  clockElements.forEach(el => {
    const id = el.id;
    const options = {};
    
    // Parse options from data attributes
    if (el.dataset.locale) options.locale = el.dataset.locale;
    if (el.dataset.showSeconds !== undefined) options.showSeconds = el.dataset.showSeconds === 'true';
    if (el.dataset.showDate !== undefined) options.showDate = el.dataset.showDate === 'true';
    if (el.dataset.color) options.color = el.dataset.color;
    if (el.dataset.fontFamily) options.fontFamily = el.dataset.fontFamily;
    if (el.dataset.useServerTime !== undefined) options.useServerTime = el.dataset.useServerTime !== 'false';
    
    if (id) {
      new LiveClock(id, options);
    }
  });
});
