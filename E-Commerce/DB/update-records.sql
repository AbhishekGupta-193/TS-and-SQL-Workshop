-- 3. Delete and update the product from the table and put the deleted record in the backup table  using trigger

------------- PRODUCT TABLE CREATED-----------------
Create Table Products(
	id serial primary key not null,
	name char(20),
	price int,
	in_stock int,
	review char(50),
	avg_rating int
);

-----------INSERT ROWS--------------------
insert into Products(id,name,price,in_stock,review,avg_rating) values(1,'Polo TShirt',600,10,'Worthy',4);
insert into Products(id,name,price,in_stock,review,avg_rating) values(2,'Cotton Trouser',950,6,'Good',5);
insert into Products(id,name,price,in_stock,review,avg_rating) values(3,'Rainy Slipper',300,18,'Worthy',2);
insert into Products(id,name,price,in_stock,review,avg_rating) values(4,'Rainy Slipper',700,8,'Worthy',5);

delete from Products where id=4;

select * from Products;


------------- PRODUCTS_BACKUP TABLE CREATED-----------------
Create Table Products_Backup(
	id int,
	name char(20),
	price int,
	in_stock int,
	review char(50),
	avg_rating int,
	deleted_at timestamp default current_timestamp
);

select * from Products_Backup;

---------------TRIGGER FUNCTION CREATED----------------------
create or replace function after_product_delete()
returns trigger as $$
begin
insert into Products_Backup(id,name,price,in_stock,review,avg_rating,deleted_at)
values (OLD.id,OLD.name,OLD.price,OLD.in_stock,OLD.review,OLD.avg_rating,current_timestamp);
return OLD;
end;$$ language plpgsql;

---------------TRIGGER CREATED----------------------
create trigger after_product_delete
after delete on Products
for each row
execute function after_product_delete();
