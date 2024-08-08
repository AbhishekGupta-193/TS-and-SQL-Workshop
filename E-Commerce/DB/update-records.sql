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