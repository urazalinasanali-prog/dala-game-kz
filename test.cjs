const https = require('https');
https.get('https://doc-0s-0k-sheets.googleusercontent.com/pub/54bogvaave6cua4cdnls17ksc4/kioh64llibils5npm58ob9r6po/1772470805000/116604808390616898740/*/e@2PACX-1vQJNJu3ItvN4gbicHMmBPMEuX0iKSoi30tYKpkEMgpFlbwNXEZcgNag9JA_-mreOgiiGh4_h8Bd4QJD?gid=0&single=true&output=csv', (res) => {
  res.on('data', (d) => process.stdout.write(d));
});
