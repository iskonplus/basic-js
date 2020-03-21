const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== "string"
    
    || parseInt(sampleActivity) > 15
    || parseInt(sampleActivity) <= 0
    || isNaN(parseInt(sampleActivity))
    
  ) {
    
    return false;
  }

  return Math.ceil((Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) * HALF_LIFE_PERIOD) / 0.693);

};