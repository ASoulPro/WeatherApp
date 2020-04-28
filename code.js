formSubmit = (e) => {
	e.preventDefault()
	countryTag = document.querySelector('.country')
	tempTag = document.querySelector('.temp')
	details = document.querySelector('.details')

	apiKey = '1d52aab08a3a0559b147497f6adfda31'
	city = document.querySelector('#City').value
	type = document.querySelector('input[name="radio"]:checked').value
	console.log(city)
	proxy = 'https://cors-anywhere.herokuapp.com/'
	string = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
	console.log(string)

	fetch(string)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log(data)
			country = data.sys.country
			myCity = data.name
			desc = data.weather[0].description
			temp = data.main.temp
			minTemp = data.main.temp_min
			maxTemp = data.main.temp_max
			pressure = data.main.pressure
			humidity = data.main.humidity
			wind = data.wind.speed
			console.log(myCity, country, desc, temp, minTemp, maxTemp, pressure, humidity, wind)
			if (type == 'F') {
				realTemp = 1.8 * (temp - 272.15) + 32
				realMinTemp = 1.8 * (minTemp - 272.15) + 32
				realMaxTemp = 1.8 * (maxTemp - 272.15) + 32
			} else {
				realTemp = temp - 272.15
				realMinTemp = minTemp - 272.15
				realMaxTemp = maxTemp - 272.15
			}

			countryTag.innerHTML = country + ' ' + myCity + ', ' + desc
			tempTag.innerHTML = realTemp.toFixed(2)
			details.innerHTML = `Temperature is from ${realMinTemp.toFixed(2)} to ${realMaxTemp.toFixed(
				2
			)}, wind ${wind}, presuure ${pressure},  humidity ${humidity}`
		})
}

Clear = () => {
	document.querySelector('#City').value = ''
	document.querySelector('.country').innerHTML = ''
	document.querySelector('.temp').innerHTML = ''
	document.querySelector('.details').innerHTML = ''
}
