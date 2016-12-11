db = db.getSiblingDB('annuals'); db.prop.find({'geoJson':{'$exists':false}}).forEach(function (e) {e.geoJson = { type: 'Point', coordinates : [e.situslongitude,e.situslatitude]};db.prop.save(e)})
