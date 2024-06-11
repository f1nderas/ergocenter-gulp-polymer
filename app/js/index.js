import "./components/ZrkApp";
import Api from "./lib/api";


const api = Api.current;

// Получаем все зоны
api.getZones().then(zones => {
  console.log('Все зоны:', zones);
}).catch(error => {
  console.error('Ошибка получения зон:', error);
});

// Получаем зоны типа "skbx.dsf.task.radar.detectareas"
api.getRtvZones().then(rtvZones => {
  console.log('Зоны типа "skbx.dsf.task.radar.detectareas":', rtvZones);
}).catch(error => {
  console.error('Ошибка получения RTV зон:', error);
});

// Получаем конфигурацию зоны по ID
const zoneId = "1700321971";
api.getConfigZone(zoneId).then(config => {
  console.log('Конфигурация зоны:', config);
}).catch(error => {
  console.error('Ошибка получения конфигурации зоны:', error);
});

// Получаем все зоны и фильтруем их по типу "skbx.dsf.task.radar.detectareas", затем получаем конфигурации для каждой зоны
api.getRtvZones().then(rtvZones => {
  const configPromises = rtvZones.map(zone => api.getConfigZone(zone.id));
  return Promise.all(configPromises);
}).then(configs => {
  console.log('Конфигурации всех RTV зон:', configs);
}).catch(error => {
  console.error('Ошибка в процессе получения данных:', error);
});



