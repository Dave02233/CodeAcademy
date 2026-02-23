select *
from cars
order by trips_completed DESC
limit 2;

select count(*)
from cars
where status = 'active';

select *
from riders
where total_trips < 500;

select avg(cost)
from trips;

select * 
from riders 
union
select * 
from riders2;

select * 
from trips
join cars
on trips.car_id = cars.id;

select * 
from trips
left join riders
on trips.rider_id = riders.id;

select *
from riders 
cross join cars;

SELECT * FROM trips;

SELECT * FROM riders;

SELECT * FROM cars;
