import { defineStore } from 'pinia';

type Alert = {
  id?: string;
  time?: number;
  expireTime?: number;
  location?: string;
};

export const useAlertStore = defineStore('alert', {
  state: () => {
    return {
      defaultLocation: 'bottom-left',
      defaultExpireTime: 5000,
      alerts: <Alert[]>[],
    }
  },
  
  getters: {
    getAlerts (state) {
      return state.alerts;
    }
  },

  actions: {
    async show(alert: Alert) {
      alert.id = Math.random().toString().substring(2);
      alert.time = Date.now();

      if (!alert.location) {
        alert.location = this.defaultLocation;
      }
      if (!alert.expireTime) {
        alert.expireTime = this.defaultExpireTime;
      }

      this.alerts.push(alert);

      if (this.alerts.length > 10) {
        this.alerts.shift();
      }
    },

    removeExpired() {
      this.alerts.forEach((alert, index) => {
        if (Date.now() - alert.time! < alert.expireTime!) {
          return;
        }
        this.alerts.splice(index, 1);
      });
    }
  },
});
