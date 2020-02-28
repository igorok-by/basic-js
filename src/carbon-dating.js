const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if ( typeof sampleActivity !== 'string'
      || isNaN(parseFloat(sampleActivity) )
      || sampleActivity >= MODERN_ACTIVITY
      || sampleActivity <= 0 ) {
        
    return false;

  } else {
    let k = 0.693 / HALF_LIFE_PERIOD;

    return Math.ceil( Math.log( MODERN_ACTIVITY / parseFloat(sampleActivity) ) / k );
  };
};
