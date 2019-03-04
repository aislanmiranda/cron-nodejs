
const cron = require('cron');

let i = 3
console.log('cron click : ' + new Date().toTimeString());
const job = new cron.CronJob({
    cronTime: '1 * * * * *',
    onTick: function() {
        if(i == 0) { 
            job.stop();
            console.log(`cron finalizado ${i}`);
        }
        console.log(`job ${i} : ${ new Date().toTimeString() }`);
        i -= 1;
    },
    start: true,
    timeZone: 'America/Sao_Paulo'
});