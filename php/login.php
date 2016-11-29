<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST)) {
		$_POST = json_decode(file_get_contents('php://input'), true);
	};

	$email = $_POST['email'];
	$pass = $_POST['pass'];

	class MyDB extends SQLite3 {
    	function __construct() {
        	$this->open('../testDB.db');
    	}
	};

	$db = new MyDB();
	if(!$db) {
    	echo $db->lastErrorMsg();
	};

	$result = $db->query('SELECT email, password FROM users WHERE email = "'.$email.'"');
	$rows = count($result);
//	echo $rows;

	if(!$rows){
		echo "User is not registered";
	};

	$row = $result->fetchArray(SQLITE3_ASSOC));
	if(($row['email'] === $email) AND ($row['password'] === $password)) {
		echo "Welcome"
	};

	$db->close()
?>