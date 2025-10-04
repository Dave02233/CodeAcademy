select location, avg(employees) from startups
group by location
having avg(employees) > 500;
select location, avg(employees) from startups
group by location;
select category, count(*) from startups
group by category
having category is not null
and count(*) > 3;
select category, count(*) from startups
group by category
having category is not null;
select category, round(avg(valuation), 2) from startups
group by category
having category is not null
order by avg(valuation) desc;
select category, round(avg(valuation), 2) from startups
group by category
having category is not null;
select avg(valuation) from startups;
select min(founded) from startups;
select max(raised) from startups
where stage = 'Seed';
select max(raised) from startups;
select sum(valuation) from startups;
select count(*) from startups;
select * from startups;