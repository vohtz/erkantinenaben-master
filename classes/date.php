<?php

class Date {
	private $hour;
	private $day;
	private $ja = '<span class="green">Ja</span>';
	private $nej = '<span class="red">Nej</span>';

	public function __construct($hour, $day) {
		$this->hour = $hour;
		$this->day = $day;
	}

	public function displayDate() {
		if($this->day == 'Sat' || $this->day == 'Sun') {
			return $this->nej;
		} else if($this->hour >= 745 && $this->hour <= 1245) {
			return $this->ja;
		} else if($this->hour >= 1330 && $this->hour <= 1420 && $this->day != 'Fri') {
			return $this->ja;
		} else {
			return $this->nej;
		}
	}
}

