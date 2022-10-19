var input = require('fs').readFileSync('/dev/stdin', 'utf8');

for(var i=1; i<=100; ++i) {  
  if parseInt(input) i%2===0;  
      console.log(i);
  continue;
}