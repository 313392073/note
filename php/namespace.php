<?php
	namespace foo;
	class Cat {
		static function says(){echo 'meoow';}
	}
	
	namespace bar;
	class Dog {
		static function says() {echo 'ruff';}
	}
	
	namespace animate;
	class Animal {
		static function breath() {echo 'air';}
	}
	
	namespace fub;
	include 'file1.php';
	include 'file2.php';
	include 'file3.php';
	
	use foo as feline;
	use bar as canine;
	use animate ;
	
	echo \feline\Cat::says();
	echo \canine\Dog::says();
	echo \animate\Animal::breath();
	
	
	function getTotal($products_costs,$tax) {
		$total = 0.00;
		$callback = function($pricePerItem) use ($tax,&$total) {
			$total += $pricePerItem*($tax+1.0);
		}
		array_walk($products_costs,$callback);
		return round($total,2);
	}
?>