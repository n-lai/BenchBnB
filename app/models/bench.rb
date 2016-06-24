class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true

  def self.in_bounds(bounds)
    min_lat = bounds['southWest']['lat'].to_f
    max_lat = bounds['northEast']['lat'].to_f
    min_lng = bounds['southWest']['lng'].to_f
    max_lng = bounds['northEast']['lng'].to_f

    benches = Bench.find_by_sql(<<-SQL)
      SELECT
        *
      FROM
        benches
      WHERE
        lat BETWEEN #{min_lat} AND #{max_lat}
      AND
        lng BETWEEN #{min_lng} AND #{max_lng}
      SQL
  end
end

{
 "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
 "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
}
