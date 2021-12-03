const os = require('os');
const { InfluxDB } = require('@influxdata/influxdb-client');
const { Point } = require('@influxdata/influxdb-client');
const EventEmitter = require('events');
require('dotenv').config();

const client = new InfluxDB({
  url: process.env.INFLUX_URL,
  token: process.env.INFLUX_BUCKET_TOKEN,
});

const writeApi = client.getWriteApi(
  process.env.INFLUX_ORGANIZATION,
  process.env.INFLUX_BUCKET
);

writeApi.useDefaultTags({ host: `${os.hostname}` });

class Monitoring extends EventEmitter {
  constructor() {
    super();
    this.startCollection();
    this.startPush();
  }

  collectionIntervalId;
  ramPoints = [];

  startCollection = () => {
    console.log('Metrics collection started');
    this.collectionInterval = setInterval(() => {
      this.emit('collect');
    }, 500);
  };

  stopCollection = () => {
    clearInterval(this.collectionIntervalId);
    writeApi.close().then(console.log('Collection stopped, closing write API'));
  };

  startPush = () => {
    console.log('Metrics pushing started');
    this.collectionInterval = setInterval(() => {
      this.emit('push');
    }, 10000);
  };

  collectRamPoint = () => {
    this.ramPoints.push(
      new Point('mem')
        .floatField('free_mem', os.freemem())
        .floatField('total_mem', os.totalmem())
    );
  };

  pushRamPoints = () => {
    try {
      writeApi.writePoints(this.ramPoints);
      this.ramPoints = [];
    } catch (e) {
      console.error(`Error occured, failed to push ${e}`);
    }
  };
}

module.exports = Monitoring;
