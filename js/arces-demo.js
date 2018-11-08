jsap = {
	"host" : "localhost",
	"oauth" : {
		"enable" : false,
		"register" : "https://localhost:8443/oauth/register",
		"tokenRequest" : "https://localhost:8443/oauth/token"
	},
	"sparql11protocol" : {
		"protocol" : "http",
		"port" : 8000,
		"query" : {
			"path" : "/query",
			"method" : "POST",
			"format" : "JSON"
		},
		"update" : {
			"path" : "/update",
			"method" : "POST",
			"format" : "JSON"
		}
	},
	"sparql11seprotocol" : {
		"protocol" : "ws",
		"availableProtocols" : {
			"ws" : {
				"port" : 9000,
				"path" : "/subscribe"
			},
			"wss" : {
				"port" : 9443,
				"path" : "/secure/subscribe"
			}
		}
	},
	"graphs" : {
		"default-graph-uri" : "http://wot.arces.unibo.it/monitor/mqtt",
		"named-graph-uri" : "http://wot.arces.unibo.it/monitor/mqtt",
		"using-graph-uri" : "http://wot.arces.unibo.it/monitor/mqtt",
		"using-named-graph-uri" : "http://wot.arces.unibo.it/monitor/mqtt"
	},
	"namespaces" : {
		"schema" : "http://schema.org/",
		"rdf" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
		"rdfs" : "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
		"sosa" : "http://www.w3.org/ns/sosa/",
		"qudt-1-1" : "http://qudt.org/1.1/schema/qudt#",
		"qudt-unit-1-1" : "http://qudt.org/1.1/vocab/unit#",
		"arces-monitor" : "http://wot.arces.unibo.it/monitor#",
		"mqtt" : "http://wot.arces.unibo.it/mqtt#",
		"time" : "http://www.w3.org/2006/time#",
		"wgs84_pos" : "http://www.w3.org/2003/01/geo/wgs84_pos#",
		"gn" : "http://www.geonames.org/ontology#"
	},
	"extended" : {
		"simulate" : true,
		"simulation" : {
			
		},
		"mqtt" : {
			"url" : "giove.arces.unibo.it",
			"port" : 52877,
			"topics" : [ "#" ],
			"ssl" : false
		},
		"regexTopics" : {
			"pepoli:6lowpan:network" : [
					".[|].ID:.(\\w+).[|].(Temperature)[:].(?<value>\\d+.\\d++).[|].\\w+[:].\\d+.\\d++.[|].\\w+[:].\\d+.\\d+\n",
					".[|].ID:.(\\w+).[|].\\w+[:].\\d+.\\d++.[|].(Humidity)[:].(?<value>\\d+.\\d++).[|].\\w+[:].\\d+.\\d+\n",
					".[|].ID:.(\\w+).[|].\\w+[:].\\d+.\\d++.[|].\\w+[:].\\d+.\\d++.[|].(Pressure)[:].(?<value>\\d+.\\d+)\n" ]
		},
		"jsonTopics" : {
			"ground/lora/moisture" : {
				"id" : "nodeId",
				"value" : "moistureValue"
			}
		},
		"places" : {
			"arces-monitor:Mars" : {
				"name" : "Mars",
				"lat" : 44.489942,
				"lon" : 11.356873,
				"childs" : [ "arces-monitor:Mars_Server_Room",
						"arces-monitor:Mars_Garden" ]
			},
			"arces-monitor:Mars_Server_Room" : {
				"name" : "Server room",
				"lat" : 44.489942,
				"lon" : 11.356873,
				"childs" : [ "arces-monitor:Mars_Server_Rack" ]
			},
			"arces-monitor:Mars_Garden" : {
				"name" : "Garden",
				"lat" : 44.489942,
				"lon" : 11.356873
			},
			"arces-monitor:Mars_Server_Rack" : {
				"name" : "Server rack",
				"lat" : 44.489942,
				"lon" : 11.356873,
				"childs" : [ "arces-monitor:MML", "arces-monitor:SAMBA",
						"arces-monitor:GIOVE" ]
			},
			"arces-monitor:MML" : {
				"name" : "MML server",
				"lat" : 44.489942,
				"lon" : 11.356873,
				"childs" : [ "arces-monitor:MML_HDD", "arces-monitor:MML_CPU" ]
			},
			"arces-monitor:MML_HDD" : {
				"name" : "MML server HDD",
				"lat" : 44.489942,
				"lon" : 11.356873
			},
			"arces-monitor:MML_CPU" : {
				"name" : "MML server CPU",
				"lat" : 44.489942,
				"lon" : 11.356873
			},
			"arces-monitor:GIOVE" : {
				"name" : "Jupiter server",
				"lat" : 44.489942,
				"lon" : 11.356873,
				"childs" : [ "arces-monitor:GIOVE_HDD",
						"arces-monitor:GIOVE_CPU" ]
			},
			"arces-monitor:GIOVE_HDD" : {
				"name" : "Jupiter server HDD",
				"lat" : 44.489942,
				"lon" : 11.356873
			},
			"arces-monitor:GIOVE_CPU" : {
				"name" : "Jupiter server CPU",
				"lat" : 44.489942,
				"lon" : 11.356873
			},
			"arces-monitor:SAMBA" : {
				"name" : "Samba server",
				"lat" : 44.489942,
				"lon" : 11.356873,
				"childs" : [ "arces-monitor:SAMBA_HDD" ]
			},
			"arces-monitor:SAMBA_HDD" : {
				"name" : "Samba server HDD",
				"lat" : 44.489942,
				"lon" : 11.356873
			},
			"arces-monitor:Star" : {
				"name" : "Star",
				"lat" : 44.492443,
				"lon" : 11.330382,
				"childs" : [ "arces-monitor:Star_Garden",
						"arces-monitor:Star_ST_Office",
						"arces-monitor:Star_SEHM_Lab",
						"arces-monitor:Star_Server_Room" ]
			},
			"arces-monitor:Star_Garden" : {
				"name" : "Garden",
				"lat" : 44.492443,
				"lon" : 11.330382
			},
			"arces-monitor:Star_ST_Office" : {
				"name" : "ST office",
				"lat" : 44.492443,
				"lon" : 11.330382
			},
			"arces-monitor:Star_SEHM_Lab" : {
				"name" : "SEHM lab",
				"lat" : 44.492443,
				"lon" : 11.330382
			},
			"arces-monitor:Star_Server_Room" : {
				"name" : "Star",
				"lat" : 44.492443,
				"lon" : 11.330382
			},
			"arces-monitor:Ares" : {
				"name" : "Ares",
				"lat" : 44.488132,
				"lon" : 11.328875,
				"childs" : [ "arces-monitor:Ares_Server_Room" ]
			},
			"arces-monitor:Ares_Server_Room" : {
				"name" : "Server room",
				"lat" : 44.488132,
				"lon" : 11.328875,
				"childs" : [ "arces-monitor:ERCOLE" ]
			},
			"arces-monitor:ERCOLE" : {
				"name" : "Hercules server",
				"lat" : 44.488132,
				"lon" : 11.328875,
				"childs" : [ "arces-monitor:ERCOLE_HDD",
						"arces-monitor:ERCOLE_CPU" ]
			},
			"arces-monitor:ERCOLE_HDD" : {
				"name" : "Hercules server HDD",
				"lat" : 44.488132,
				"lon" : 11.328875
			},
			"arces-monitor:ERCOLE_CPU" : {
				"name" : "Hercules server CPU",
				"lat" : 44.488132,
				"lon" : 11.328875
			}
		},
		"semantic-mappings" : {
			"/ffa574972ab9/applink/107/001BC50C700009CD" : {
				"observation" : "arces-monitor:001BC50C700009CD-DASH7-Temperature",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:Star_SEHM_Lab",
				"comment" : "Temperature sensor used to show the need of a new air conditioning system in SEHM lab",
				"label" : "SEHM lab temperature"
			},
			"/ffa574972ab9/applink/107/001BC50C700009BB" : {
				"observation" : "arces-monitor:001BC50C700009BB-DASH7-Temperature",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:Star_ST_Office",
				"comment" : "Temperature sensor used to show the need of a new air conditioning system in ST office",
				"label" : "ST office temperature"
			},
			"5CCF7F15676D/temperature" : {
				"observation" : "arces-monitor:5CCF7F15676D-temperature",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:Mars_Server_Rack",
				"comment" : "Temperatura zona rack sala server Toffano",
				"label" : "Server rack zone temperature"
			},
			"5CCF7F15676D/humidity" : {
				"observation" : "arces-monitor:5CCF7F15676D-humidity",
				"unit" : "qudt-unit-1-1:Percent",
				"location" : "arces-monitor:Mars_Server_Rack",
				"comment" : "Umidità zona rack sala server Toffano",
				"label" : "Server rack zone humidity"
			},
			"5CCF7F1B599E/temperature" : {
				"observation" : "arces-monitor:5CCF7F1B599E-temperature",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:Mars_Garden",
				"comment" : "Temperatura esterna Toffano",
				"label" : "External temperature"
			},
			"5CCF7F1B599E/humidity" : {
				"observation" : "arces-monitor:5CCF7F1B599E-humidity",
				"unit" : "qudt-unit-1-1:Percent",
				"location" : "arces-monitor:Mars_Garden",
				"comment" : "Umidità esterna Toffano",
				"label" : "External humidity"
			},
			"5CCF7F151DC9/temperature" : {
				"observation" : "arces-monitor:5CCF7F151DC9-temperature",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:Mars_Server_Room",
				"comment" : "Temperatura interna sala server Toffano",
				"label" : "Near window temperature"
			},
			"5CCF7F1B58AC/temperature" : {
				"observation" : "arces-monitor:5CCF7F1B58AC-temperature",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:Star_Server_Room",
				"comment" : "Temperatura zona rack sala server Pepoli",
				"label" : "Server rack zone temperature"
			},
			"5CCF7F1B58AC/humidity" : {
				"observation" : "arces-monitor:5CCF7F1B58AC-humidity",
				"unit" : "qudt-unit-1-1:Percent",
				"location" : "arces-monitor:Star_Server_Room",
				"comment" : "Umidità zona rack sala server Pepoli",
				"label" : "Server rack zone humidity"
			},
			"arces/servers/mars/marsamba/hd/sda/temperature" : {
				"observation" : "arces-monitor:ServerSambaHDDSda",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:SAMBA_HDD",
				"comment" : "Temperatura Server SAMBA HDD SDA",
				"label" : "HDD SDA"
			},
			"arces/servers/mars/marsamba/hd/sdb/temperature" : {
				"observation" : "arces-monitor:ServerSambaHDDSdb",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:SAMBA_HDD",
				"comment" : "Temperatura Server SAMBA HDD SDB",
				"label" : "HDD SDB"
			},
			"arces/servers/mars/giove/hd/sda/temperature" : {
				"observation" : "arces-monitor:ServerGioveHDDSda",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_HDD",
				"comment" : "Temperatura Server GIOVE HDD SDA",
				"label" : "HDD SDA"
			},
			"arces/servers/mars/giove/hd/sdb/temperature" : {
				"observation" : "arces-monitor:ServerGioveHDDSdb",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_HDD",
				"comment" : "Temperatura Server GIOVE HDD SDB",
				"label" : "HDD SDB"
			},
			"arces/servers/mars/giove/hd/sdc/temperature" : {
				"observation" : "arces-monitor:ServerGioveHDDSdc",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_HDD",
				"comment" : "Temperatura Server GIOVE HDD SDC",
				"label" : "HDD SDC"
			},
			"arces/servers/mars/giove/hd/sdd/temperature" : {
				"observation" : "arces-monitor:ServerGioveHDDSdd",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_HDD",
				"comment" : "Temperatura Server GIOVE HDD SDD",
				"label" : "HDD SDD"
			},
			"arces/servers/mars/giove/hd/sdf/temperature" : {
				"observation" : "arces-monitor:ServerGioveHDDSdf",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_HDD",
				"comment" : "Temperatura Server GIOVE HDD SDF",
				"label" : "HDD SDF"
			},
			"arces/servers/mars/giove/hd/sdg/temperature" : {
				"observation" : "arces-monitor:ServerGioveHDDSdg",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_HDD",
				"comment" : "Temperatura Server GIOVE HDD SDG",
				"label" : "HDD SDG"
			},
			"arces/servers/mars/giove/hd/sdh/temperature" : {
				"observation" : "arces-monitor:ServerGioveHDDSdh",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_HDD",
				"comment" : "Temperatura Server GIOVE HDD SDH",
				"label" : "HDD SDH"
			},
			"arces/servers/mars/giove/cpu/core-6/temperature" : {
				"observation" : "arces-monitor:ServerGiove6",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_CPU",
				"comment" : "Temperatura Server GIOVE Core 6",
				"label" : "Core 6"
			},
			"arces/servers/mars/giove/cpu/core-5/temperature" : {
				"observation" : "arces-monitor:ServerGiove5",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_CPU",
				"comment" : "Temperatura Server GIOVE Core 5",
				"label" : "Core 5"
			},
			"arces/servers/mars/giove/cpu/core-4/temperature" : {
				"observation" : "arces-monitor:ServerGiove4",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_CPU",
				"comment" : "Temperatura Server GIOVE Core 4",
				"label" : "Core 4"
			},
			"arces/servers/mars/giove/cpu/core-3/temperature" : {
				"observation" : "arces-monitor:ServerGiove3",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_CPU",
				"comment" : "Temperatura Server GIOVE Core 3",
				"label" : "Core 3"
			},
			"arces/servers/mars/giove/cpu/core-2/temperature" : {
				"observation" : "arces-monitor:ServerGiove2",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_CPU",
				"comment" : "Temperatura Server GIOVE Core 2",
				"label" : "Core 2"
			},
			"arces/servers/mars/giove/cpu/core-1/temperature" : {
				"observation" : "arces-monitor:ServerGiove1",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:GIOVE_CPU",
				"comment" : "Temperatura Server GIOVE Core 1",
				"label" : "Core 1"
			},
			"arces/servers/mars/mml/hd/sda/temperature" : {
				"observation" : "arces-monitor:ServerMmlHDDSda",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:MML_HDD",
				"comment" : "Temperatura Server MML HDD SDA",
				"label" : "HDD SDA"
			},
			"arces/servers/mars/mml/hd/sdb/temperature" : {
				"observation" : "arces-monitor:ServerMmlHDDSdb",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:MML_HDD",
				"comment" : "Temperatura Server MML HDD SDB",
				"label" : "HDD SDB"
			},
			"arces/servers/mars/mml/cpu/core-6/temperature" : {
				"observation" : "arces-monitor:ServerMml6",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:MML_CPU",
				"comment" : "Temperatura Server MML Core 6",
				"label" : "Core 6"
			},
			"arces/servers/mars/mml/cpu/core-5/temperature" : {
				"observation" : "arces-monitor:ServerMml5",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:MML_CPU",
				"comment" : "Temperatura Server MML Core 5",
				"label" : "Core 5"
			},
			"arces/servers/mars/mml/cpu/core-4/temperature" : {
				"observation" : "arces-monitor:ServerMml4",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:MML_CPU",
				"comment" : "Temperatura Server MML Core 4",
				"label" : "Core 4"
			},
			"arces/servers/mars/mml/cpu/core-3/temperature" : {
				"observation" : "arces-monitor:ServerMml3",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:MML_CPU",
				"comment" : "Temperatura Server MML Core 3",
				"label" : "Core 3"
			},
			"arces/servers/mars/mml/cpu/core-2/temperature" : {
				"observation" : "arces-monitor:ServerMml2",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:MML_CPU",
				"comment" : "Temperatura Server MML Core 2",
				"label" : "Core 2"
			},
			"arces/servers/mars/mml/cpu/core-1/temperature" : {
				"observation" : "arces-monitor:ServerMml1",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:MML_CPU",
				"comment" : "Temperatura Server MML Core 1",
				"label" : "Core 1"
			},
			"arces/servers/ares/ercole/cpu/core-20/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore20",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 20",
				"label" : "Core 20"
			},
			"arces/servers/ares/ercole/cpu/core-19/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore19",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 19",
				"label" : "Core 19"
			},
			"arces/servers/ares/ercole/cpu/core-18/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore18",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 18",
				"label" : "Core 18"
			},
			"arces/servers/ares/ercole/cpu/core-17/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore17",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 17",
				"label" : "Core 17"
			},
			"arces/servers/ares/ercole/cpu/core-16/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore16",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 16",
				"label" : "Core 16"
			},
			"arces/servers/ares/ercole/cpu/core-15/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore15",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 15",
				"label" : "Core 15"
			},
			"arces/servers/ares/ercole/cpu/core-14/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore14",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 14",
				"label" : "Core 14"
			},
			"arces/servers/ares/ercole/cpu/core-13/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore13",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 13",
				"label" : "Core 13"
			},
			"arces/servers/ares/ercole/cpu/core-12/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore12",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 12",
				"label" : "Core 12"
			},
			"arces/servers/ares/ercole/cpu/core-11/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore11",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 11",
				"label" : "Core 11"
			},
			"arces/servers/ares/ercole/cpu/core-10/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore10",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 10",
				"label" : "Core 10"
			},
			"arces/servers/ares/ercole/cpu/core-9/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore9",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 9",
				"label" : "Core 9"
			},
			"arces/servers/ares/ercole/cpu/core-8/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore8",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 8",
				"label" : "Core 8"
			},
			"arces/servers/ares/ercole/cpu/core-7/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore7",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 7",
				"label" : "Core 7"
			},
			"arces/servers/ares/ercole/cpu/core-6/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore6",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 6",
				"label" : "Core 6"
			},
			"arces/servers/ares/ercole/cpu/core-5/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore5",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 5",
				"label" : "Core 5"
			},
			"arces/servers/ares/ercole/cpu/core-4/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore4",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 4",
				"label" : "Core 4"
			},
			"arces/servers/ares/ercole/cpu/core-3/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore3",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 3",
				"label" : "Core 3"
			},
			"arces/servers/ares/ercole/cpu/core-2/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore2",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 2",
				"label" : "Core 2"
			},
			"arces/servers/ares/ercole/cpu/core-1/temperature" : {
				"observation" : "arces-monitor:ServerErcoleCore1",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_CPU",
				"comment" : "Temperatura Server ERCOLE Core 1",
				"label" : "Core 1"
			},
			"arces/servers/ares/ercole/hd/sda/temperature" : {
				"observation" : "arces-monitor:ServerErcoleHDDSda",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_HDD",
				"comment" : "Temperatura Server ERCOLE HDD SDA",
				"label" : "HDD SDA"
			},
			"arces/servers/ares/ercole/hd/sdb/temperature" : {
				"observation" : "arces-monitor:ServerErcoleHDDSdb",
				"unit" : "qudt-unit-1-1:DegreeCelsius",
				"location" : "arces-monitor:ERCOLE_HDD",
				"comment" : "Temperatura Server ERCOLE HDD SDB",
				"label" : "HDD SDB"
			},
			"swamp/devices/moisture1/up/Moisture_Signal_to_Supply_Perc" : {
				"observation" : "arces-monitor:swamp_devices_moisture1_up_Moisture_Signal_to_Supply_Perc",
				"unit" : "qudt-unit-1-1:Percent",
				"location" : "arces-monitor:Star_Garden",
				"comment" : "Soil moisture sensor provided by SWAMP brasilian partner. The node communicates with LoRa.",
				"label" : "Soil moisture by LoRa Brasilero sensor"
			},
			"swamp/devices/moisture1/up/Moisture_Supply_Voltage" : {
				"observation" : "arces-monitor:swamp_devices_moisture1_up_Moisture_Supply_Voltage",
				"unit" : "qudt-unit-1-1:Volt",
				"location" : "arces-monitor:Star_Garden",
				"comment" : "Soil moisture sensor provided by SWAMP brasilian partner. The node communicates with LoRa.",
				"label" : "Sensor supply voltage"
			},
			"swamp/devices/moisture1/up/Node_Supply_Voltage" : {
				"observation" : "arces-monitor:swamp_devices_moisture1_up_Node_Supply_Voltage",
				"unit" : "qudt-unit-1-1:Volt",
				"location" : "arces-monitor:Star_Garden",
				"comment" : "Soil moisture sensor provided by SWAMP brasilian partner. The node communicates with LoRa.",
				"label" : "Battery voltage"
			}
		}
	},
	"updates" : {
		"DELETE_ALL" : {
			"sparql" : "WITH <http://wot.arces.unibo.it/monitor/mqtt> DELETE {?s ?p ?o} WHERE {?s ?p ?o}"
		},
		"DELETE_ALL_LOGS" : {
			"sparql" : "WITH <http://wot.arces.unibo.it/monitor/mqtt/log> DELETE {?s ?p ?o} WHERE {?s ?p ?o}"
		},
		"DELETE_ALL_MESSAGES" : {
			"sparql" : "WITH <http://wot.arces.unibo.it/monitor/mqtt/message> DELETE {?s ?p ?o} WHERE {?s ?p ?o}"
		},
		"REMOVE_PLACE" : {
			"sparql" : "WITH <http://wot.arces.unibo.it/monitor/mqtt> DELETE {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates ?coordinate . ?coordinate schema:latitude ?lat ; schema:longitude ?lon} WHERE {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates ?coordinate . ?coordinate schema:latitude ?lat ; schema:longitude ?lon}",
			"forcedBindings" : {
				"place" : {
					"type" : "uri",
					"value" : "arces-monitor:Mars"
				}
			}
		},
		"ADD_PLACE" : {
			"sparql" : "INSERT DATA {GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates _:coordinate . _:coordinate schema:latitude ?lat ; schema:longitude ?lon}}",
			"forcedBindings" : {
				"place" : {
					"type" : "uri",
					"value" : "arces-monitor:Mars"
				},
				"name" : {
					"type" : "literal",
					"value" : "Mars"
				},
				"lat" : {
					"type" : "literal",
					"value" : "44.489664",
					"datatype" : "xsd:decimal"
				},
				"lon" : {
					"type" : "literal",
					"value" : "11.357023",
					"datatype" : "xsd:decimal"
				}
			}
		},
		"LINK_PLACES" : {
			"sparql" : "INSERT DATA { GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?root schema:containsPlace ?child . ?child schema:containedInPlace ?root }}",
			"forcedBindings" : {
				"root" : {
					"type" : "uri",
					"value" : "arces-monitor:rootPlace"
				},
				"child" : {
					"type" : "uri",
					"value" : "arces-monitor:childPlace"
				}
			}
		},
		"DELETE_LINK_PLACES" : {
			"sparql" : "DELETE DATA { GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?root schema:containsPlace ?child . ?child schema:containedInPlace ?root }}",
			"forcedBindings" : {
				"root" : {
					"type" : "uri",
					"value" : "arces-monitor:rootPlace"
				},
				"child" : {
					"type" : "uri",
					"value" : "arces-monitor:childPlace"
				}
			}
		},
		"MQTT_MESSAGE" : {
			"sparql" : "WITH <http://wot.arces.unibo.it/monitor/mqtt/message> DELETE {?oldMessage rdf:type mqtt:Message ; mqtt:hasValue ?oldValue ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?oldTimestamp} INSERT {_:message rdf:type mqtt:Message ; mqtt:hasValue ?value ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?timestamp} WHERE {OPTIONAL{?oldMessage rdf:type mqtt:Message ; mqtt:hasValue ?oldValue ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?oldTimestamp} . BIND(now() AS ?timestamp)}",
			"forcedBindings" : {
				"value" : {
					"type" : "literal",
					"value" : "mqttValueXYZ"
				},
				"topic" : {
					"type" : "literal",
					"value" : "mqttTopicXYZ"
				},
				"broker" : {
					"type" : "literal",
					"value" : "tcp://giove.arces.unibo.it:52887"
				}
			}
		},
		"LOG_QUANTITY" : {
			"sparql" : "INSERT {GRAPH <http://wot.arces.unibo.it/monitor/mqtt/log> {_:log arces-monitor:refersTo ?observation ; qudt-1-1:numericValue ?value ; time:inXSDDateTimeStamp ?timestamp}} WHERE {BIND(now() AS ?timestamp)}",
			"forcedBindings" : {
				"observation" : {
					"type" : "uri",
					"value" : "arces-monitor:QuantityValueXYZ"
				},
				"value" : {
					"type" : "literal",
					"value" : "1234",
					"datatype" : "xsd:decimal"
				}
			}
		},
		"REMOVE_OBSERVATION" : {
			"sparql" : "WITH <http://wot.arces.unibo.it/monitor/mqtt> DELETE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; sosa:hasFeatureOfInterest ?location ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue ?value} WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; sosa:hasFeatureOfInterest ?location ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue ?value}",
			"forcedBindings" : {
				"observation" : {
					"type" : "uri",
					"value" : "arces-monitor:ObservationXYZ"
				}
			}
		},
		"ADD_OBSERVATION" : {
			"sparql" : "INSERT DATA {GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; sosa:hasFeatureOfInterest ?location ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult _:quantity . _:quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue 'NaN'}}",
			"forcedBindings" : {
				"observation" : {
					"type" : "uri",
					"value" : "arces-monitor:ObservationXYZ"
				},
				"comment" : {
					"type" : "literal",
					"value" : "This is an observation"
				},
				"label" : {
					"type" : "literal",
					"value" : "The observation XYZ"
				},
				"location" : {
					"type" : "uri",
					"value" : "arces-monitor:Mars"
				},
				"topic" : {
					"type" : "literal",
					"value" : "mqttTopicXYZ"
				},
				"unit" : {
					"type" : "uri",
					"value" : "qudt-unit-1-1:DegreeCelsius"
				}
			}
		},
		"UPDATE_OBSERVATION_VALUE" : {
			"sparql" : "WITH <http://wot.arces.unibo.it/monitor/mqtt> DELETE {?quantity qudt-1-1:numericValue ?oldValue} INSERT {?quantity qudt-1-1:numericValue ?value} WHERE {?observation rdf:type sosa:Observation ; sosa:hasResult ?quantity . OPTIONAL {?quantity qudt-1-1:numericValue ?oldValue}}",
			"forcedBindings" : {
				"observation" : {
					"type" : "uri",
					"value" : "arces-monitor:ObservationXYZ"
				},
				"value" : {
					"type" : "literal",
					"datatype" : "xsd:decimal",
					"value" : "12345.67890"
				}
			}
		}
	},
	"queries" : {
		"LOG_QUANTITY" : {
			"sparql" : "SELECT * WHERE {?log arces-monitor:refersTo ?quantity ; qudt-1-1:numericValue ?value; time:inXSDDateTimeStamp ?timestamp}",
			"graphs" : {
				"default-graph-uri" : "http://wot.arces.unibo.it/monitor/mqtt/log",
				"named-graph-uri" : "http://wot.arces.unibo.it/monitor/mqtt/log"
			}
		},
		"PLACES" : {
			"sparql" : "SELECT * WHERE {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates ?coordinate . ?coordinate schema:latitude ?lat ; schema:longitude ?long}"
		},
		"NO_CHILD" : {
			"sparql" : "SELECT * where {?root rdf:type schema:Place ; schema:name ?name . FILTER NOT EXISTS{?child schema:containedInPlace ?root}}"
		},
		"MAP_PLACES" : {
			"sparql" : "SELECT * WHERE {?root rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates ?coordinate . ?coordinate schema:latitude ?lat ; schema:longitude ?long.  FILTER NOT EXISTS{?root schema:containedInPlace ?place}}"
		},
		"CONTAINED_PLACES" : {
			"sparql" : "SELECT * where { ?root rdf:type schema:Place ; schema:containsPlace ?child . ?child schema:name ?childName}",
			"forcedBindings" : {
				"root" : {
					"type" : "uri",
					"value" : "arces-monitor:Mars"
				}
			}
		},
		"ROOT_PLACES" : {
			"sparql" : "SELECT * where { ?root rdf:type schema:Place .  FILTER NOT EXISTS{?root schema:containedInPlace ?place} }"
		},
		"OBSERVATIONS_TOPICS" : {
			"sparql" : "SELECT * WHERE {?observation rdf:type sosa:Observation ; arces-monitor:hasMqttTopic ?topic}"
		},
		"OBSERVATIONS" : {
			"sparql" : "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasResult ?quantity ; sosa:hasFeatureOfInterest ?place . ?place schema:name ?placeName . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit . OPTIONAL {?quantity qudt-1-1:numericValue ?value}}"
		},
		"OBSERVATIONS_BY_LOCATION" : {
			"sparql" : "SELECT * WHERE { ?observation sosa:hasFeatureOfInterest ?location ; rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ;  qudt-1-1:numericValue ?value}",
			"forcedBindings" : {
				"location" : {
					"type" : "uri",
					"value" : "arces-monitor:Mars"
				}
			}
		},
		"OBSERVATIONS_BY_UNIT" : {
			"sparql" : "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasFeatureOfInterest ?location ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ;  qudt-1-1:numericValue ?value}",
			"forcedBindings" : {
				"unit" : {
					"type" : "uri",
					"value" : "qudt-unit-1-1:DegreeCelsius"
				}
			}
		},
		"ALL_VALUES" : {
			"sparql" : "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasFeatureOfInterest ?location ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ;  qudt-1-1:numericValue ?value}",
			"forcedBindings" : {
				"observation" : {
					"type" : "uri",
					"value" : "arces-monitor:ObservationXYZ"
				}
			}
		},
		"MQTT_TOPICS_COUNT" : {
			"sparql" : "SELECT (COUNT(DISTINCT ?topic) AS ?topics) WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic}"
		},
		"MQTT_TOPICS" : {
			"sparql" : "SELECT DISTINCT * WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker}"
		},
		"MQTT_TOPIC_VALUE" : {
			"sparql" : "SELECT * WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic; mqtt:hasValue ?value}",
			"forcedBindings" : {
				"topic" : {
					"type" : "literal",
					"value" : "mqttTopicXYZ"
				}
			}
		},
		"MQTT_MESSAGES" : {
			"sparql" : "SELECT ?topic ?value ?broker WHERE {?message rdf:type mqtt:Message ; mqtt:hasValue ?value ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker}",
			"graphs" : {
				"default-graph-uri" : "http://wot.arces.unibo.it/monitor/mqtt/message",
				"named-graph-uri" : "http://wot.arces.unibo.it/monitor/mqtt/message"
			}
		}
	}
}