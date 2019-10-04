var Airtable = require('airtable')
var Base = new Airtable({ apiKey: 'keyqmNtP4aiJpBh5V' }).base(
  'appGdWpntueWjVKyd'
)
export default {
  getPosts() {
    return Base('Pass-kalender')
      .select()
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            return record
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            return
          }
        }
      )
  }
}
