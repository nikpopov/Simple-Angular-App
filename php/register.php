<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST)) {
		$_POST = json_decode(file_get_contents('php://input'), true);
	};
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	class MyDB extends SQLite3 {
    	function __construct() {
        	$this->open('../testDB.db');
    	}
	};

	$db = new MyDB();
	if(!$db) {
    	echo $db->lastErrorMsg();
	};

	$ret = $db->exec("CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		firstname VARCHAR(255) NOT NULL,
		lastname VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL,
		password VARCHAR(255) NOT NULL
	)");

	if(!$ret){
    	echo $db->lastErrorMsg();
	};

	$result = $db->query('SELECT email FROM users WHERE email="'.$email.'"');
	$rows = count($result);
//	echo $rows;

	if(!$rows){
		$db->query("INSERT INTO users (firstname, lastname, email, password) values ('$firstname', '$lastname', '$email', '$password')");
		echo "Status: OK";
	} else {
		echo"User Exist";
	};


//	$result = $db->query("SELECT id, firstname, lastname, email, password FROM users WHERE email = $email");

//	while($row = $result->fetchArray(SQLITE3_ASSOC)) {
//		echo "id: " . $row['id'] . "\n";
//		echo "firstName: " . $row['firstname'] . "\n";
//		echo "lastName: " . $row['lastname'] . "\n";
//		echo "email: " . $row['email'] . "\n";
//		echo "password: " . $row['password'] . "\n";
//	};

	$db->close()
?>