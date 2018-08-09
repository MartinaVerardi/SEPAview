var jsap = {
    "host": "mml.arces.unibo.it",
    "oauth": {
        "enable" : false,
        "register": "https://localhost:8443/oauth/register",
        "tokenRequest": "https://localhost:8443/oauth/token"
    },
    "sparql11protocol": {
        "protocol": "http",
        "port": 8000,
        "query": {
            "path": "/query",
            "method": "POST",
            "format": "JSON"
        },
        "update": {
            "path": "/update",
            "method": "POST",
            "format": "JSON"
        }
    },
    "sparql11seprotocol": {
        "protocol": "ws",
        "availableProtocols": {
            "ws": {
                "port": 9000,
                "path": "/subscribe"
            },
            "wss": {
                "port": 9443,
                "path": "/secure/subscribe"
            }
        }
    },
    "graphs": {
        "default-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt",
        "named-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt",
        "using-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt",
        "using-named-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt"
    },
    "namespaces": {
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "rdfs": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "sosa": "http://www.w3.org/ns/sosa/",
        "qudt-1-1": "http://qudt.org/1.1/schema/qudt#",
        "qudt-unit-1-1": "http://qudt.org/1.1/vocab/unit#",
        "arces-monitor": "http://wot.arces.unibo.it/monitor#",
        "mqtt": "http://wot.arces.unibo.it/mqtt#",
        "time": "http://www.w3.org/2006/time#",
        "wgs84_pos": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "gn": "http://www.geonames.org/ontology#"
    },
    "extended": {
        "simulate": false,
        "simulation" : {
            "italy/site1/soilmoisture" : [35,75],
            "italy/site1/pressure" : [900,1100],
            "italy/site1/temperature" : [15,40]
        },
        "mqtt": {
            "url": "giove.arces.unibo.it",
            "port": 52877,
            "topics": [
                "#"
            ],
            "ssl": false
        },
        "regexTopics": {
            "pepoli:6lowpan:network": [
                ".[|].ID:.(\\w+).[|].(Temperature)[:].(?<value>\\d+.\\d++).[|].\\w+[:].\\d+.\\d++.[|].\\w+[:].\\d+.\\d+\n",
                ".[|].ID:.(\\w+).[|].\\w+[:].\\d+.\\d++.[|].(Humidity)[:].(?<value>\\d+.\\d++).[|].\\w+[:].\\d+.\\d+\n",
                ".[|].ID:.(\\w+).[|].\\w+[:].\\d+.\\d++.[|].\\w+[:].\\d+.\\d++.[|].(Pressure)[:].(?<value>\\d+.\\d+)\n"
            ]
        },
        "jsonTopics": {
            "ground/lora/moisture": {
                "id": "nodeId",
                "value": "moistureValue"
            }
        },
        "semantic-mappings": {
            "/ffa574972ab9/applink/107/001BC50C700009CD": {
                "observation": "arces-monitor:001BC50C700009CD-DASH7-Temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Star",
                "comment": "Temperatura sensori DASH7 sede Pepoli",
                "label": "Temperatura sensore 001BC50C700009CD"
            },
            "/ffa574972ab9/applink/107/001BC50C700009BB": {
                "observation": "arces-monitor:001BC50C700009BB-DASH7-Temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Star",
                "comment": "Temperatura sensori DASH7 sede Pepoli",
                "label": "Temperatura sensore 001BC50C700009BB"
            },
            "pepoli/6lowpan/network/NODO1/Temperature": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo1-Temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Star",
                "comment": "Temperatura sala server Viale Pepoli (rete 6LowPan)",
                "label": "Temperatura sala server Viale Pepoli"
            },
            "pepoli/6lowpan/network/NODO1/Humidity": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo1-Humidity",
                "unit": "qudt-unit-1-1:Percent",
                "location": "arces-monitor:Star",
                "comment": "Umidità sala server Viale Pepoli (rete 6LowPan)",
                "label": "Umidità sala server Viale Pepoli"
            },
            "pepoli/6lowpan/network/NODO1/Pressure": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo1-Pressure",
                "unit": "qudt-unit-1-1:Millibar",
                "location": "arces-monitor:Star",
                "comment": "Pressione atmosferica sala server Viale Pepoli (rete 6LowPan)",
                "label": "Pressione atmosferica sala server Viale Pepoli"
            },
            "pepoli/6lowpan/network/NODO2/Temperature": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo2-Temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Star",
                "comment": "Temperatura ufficio Luca Perilli (rete 6LowPan)",
                "label": "Temperatura ufficio Luca Perilli"
            },
            "pepoli/6lowpan/network/NODO2/Humidity": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo2-Humidity",
                "unit": "qudt-unit-1-1:Percent",
                "location": "arces-monitor:Star",
                "comment": "Umidità ufficio SLuca Perilli (rete 6LowPan)",
                "label": "Umidità ufficio Luca Perilli"
            },
            "pepoli/6lowpan/network/NODO2/Pressure": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo2-Pressure",
                "unit": "qudt-unit-1-1:Millibar",
                "location": "arces-monitor:Star",
                "comment": "Pressione atmosferica ufficio SLuca Perilli (rete 6LowPan)",
                "label": "Pressione atmosferica sala server Viale Pepoli"
            },
            "pepoli/6lowpan/network/NODO3/Temperature": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo3-Temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Star",
                "comment": "Temperatura Blue Hall (rete 6LowPan)",
                "label": "Temperatura Blue Hall"
            },
            "pepoli/6lowpan/network/NODO3/Humidity": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo3-Humidity",
                "unit": "qudt-unit-1-1:Percent",
                "location": "arces-monitor:Star",
                "comment": "Umidità Blue Hall (rete 6LowPan)",
                "label": "Umidità Blue Hall"
            },
            "pepoli/6lowpan/network/NODO3/Pressure": {
                "observation": "arces-monitor:Pepoli-6lowpan-Nodo3-Pressure",
                "unit": "qudt-unit-1-1:Millibar",
                "location": "arces-monitor:Star",
                "comment": "Pressione atmosferica Blue Hall (rete 6LowPan)",
                "label": "Pressione atmosferica Blue Hall"
            },
            "ground/lora/moisture/device1": {
                "observation": "arces-monitor:ground-lora-moisture-device1",
                "unit": "qudt-unit-1-1:Percent",
                "location": "arces-monitor:Star",
                "comment": "Umidità giardino 1 (rete LoRa)",
                "label": "Umidità giardino"
            },
            "ground/lora/moisture/device2": {
                "observation": "arces-monitor:ground-lora-moisture-device2",
                "unit": "qudt-unit-1-1:Percent",
                "location": "arces-monitor:Star",
                "comment": "Umidità giardino 2 (rete LoRa)",
                "label": "Umidità giardino"
            },
            "arces/servers/ares/ercole/cpu/core-20/temperature": {
                "observation": "arces-monitor:ServerErcoleCore20",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 20",
                "label": "Temperatura Server ERCOLE Core 20"
            },
            "arces/servers/ares/ercole/cpu/core-19/temperature": {
                "observation": "arces-monitor:ServerErcoleCore19",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 19",
                "label": "Temperatura Server ERCOLE Core 19"
            },
            "arces/servers/ares/ercole/cpu/core-18/temperature": {
                "observation": "arces-monitor:ServerErcoleCore18",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 18",
                "label": "Temperatura Server ERCOLE Core 18"
            },
            "arces/servers/ares/ercole/cpu/core-17/temperature": {
                "observation": "arces-monitor:ServerErcoleCore17",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 17",
                "label": "Temperatura Server ERCOLE Core 17"
            },
            "arces/servers/ares/ercole/cpu/core-16/temperature": {
                "observation": "arces-monitor:ServerErcoleCore16",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 16",
                "label": "Temperatura Server ERCOLE Core 16"
            },
            "arces/servers/ares/ercole/cpu/core-15/temperature": {
                "observation": "arces-monitor:ServerErcoleCore15",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 15",
                "label": "Temperatura Server ERCOLE Core 15"
            },
            "arces/servers/ares/ercole/cpu/core-14/temperature": {
                "observation": "arces-monitor:ServerErcoleCore14",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 14",
                "label": "Temperatura Server ERCOLE Core 14"
            },
            "arces/servers/ares/ercole/cpu/core-13/temperature": {
                "observation": "arces-monitor:ServerErcoleCore13",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 13",
                "label": "Temperatura Server ERCOLE Core 13"
            },
            "arces/servers/ares/ercole/cpu/core-12/temperature": {
                "observation": "arces-monitor:ServerErcoleCore12",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 12",
                "label": "Temperatura Server ERCOLE Core 12"
            },
            "arces/servers/ares/ercole/cpu/core-11/temperature": {
                "observation": "arces-monitor:ServerErcoleCore11",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 11",
                "label": "Temperatura Server ERCOLE Core 11"
            },
            "arces/servers/ares/ercole/cpu/core-10/temperature": {
                "observation": "arces-monitor:ServerErcoleCore10",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 10",
                "label": "Temperatura Server ERCOLE Core 10"
            },
            "arces/servers/ares/ercole/cpu/core-9/temperature": {
                "observation": "arces-monitor:ServerErcoleCore9",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 9",
                "label": "Temperatura Server ERCOLE Core 9"
            },
            "arces/servers/ares/ercole/cpu/core-8/temperature": {
                "observation": "arces-monitor:ServerErcoleCore8",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 8",
                "label": "Temperatura Server ERCOLE Core 8"
            },
            "arces/servers/ares/ercole/cpu/core-7/temperature": {
                "observation": "arces-monitor:ServerErcoleCore7",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 7",
                "label": "Temperatura Server ERCOLE Core 7"
            },
            "arces/servers/ares/ercole/cpu/core-6/temperature": {
                "observation": "arces-monitor:ServerErcoleCore6",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 6",
                "label": "Temperatura Server ERCOLE Core 6"
            },
            "arces/servers/ares/ercole/cpu/core-5/temperature": {
                "observation": "arces-monitor:ServerErcoleCore5",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 5",
                "label": "Temperatura Server ERCOLE Core 5"
            },
            "arces/servers/ares/ercole/cpu/core-4/temperature": {
                "observation": "arces-monitor:ServerErcoleCore4",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 4",
                "label": "Temperatura Server ERCOLE Core 4"
            },
            "arces/servers/ares/ercole/cpu/core-3/temperature": {
                "observation": "arces-monitor:ServerErcoleCore3",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 3",
                "label": "Temperatura Server ERCOLE Core 3"
            },
            "arces/servers/ares/ercole/cpu/core-2/temperature": {
                "observation": "arces-monitor:ServerErcoleCore2",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 2",
                "label": "Temperatura Server ERCOLE Core 2"
            },
            "arces/servers/ares/ercole/cpu/core-1/temperature": {
                "observation": "arces-monitor:ServerErcoleCore1",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE Core 1",
                "label": "Temperatura Server ERCOLE Core 1"
            },
            "arces/servers/mars/mml/cpu/core-6/temperature": {
                "observation": "arces-monitor:ServerMml6",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server MML Core 6",
                "label": "Temperatura Server MML Core 6"
            },
            "arces/servers/mars/mml/cpu/core-5/temperature": {
                "observation": "arces-monitor:ServerMml5",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server MML Core 5",
                "label": "Temperatura Server MML Core 5"
            },
            "arces/servers/mars/mml/cpu/core-4/temperature": {
                "observation": "arces-monitor:ServerMml4",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server MML Core 4",
                "label": "Temperatura Server MML Core 4"
            },
            "arces/servers/mars/mml/cpu/core-3/temperature": {
                "observation": "arces-monitor:ServerMml3",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server MML Core 3",
                "label": "Temperatura Server MML Core 3"
            },
            "arces/servers/mars/mml/cpu/core-2/temperature": {
                "observation": "arces-monitor:ServerMml2",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server MML Core 2",
                "label": "Temperatura Server MML Core 2"
            },
            "arces/servers/mars/mml/cpu/core-1/temperature": {
                "observation": "arces-monitor:ServerMml1",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server MML Core 1",
                "label": "Temperatura Server MML Core 1"
            },
            "arces/servers/mars/giove/cpu/core-6/temperature": {
                "observation": "arces-monitor:ServerGiove6",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE Core 6",
                "label": "Temperatura Server GIOVE Core 6"
            },
            "arces/servers/mars/giove/cpu/core-5/temperature": {
                "observation": "arces-monitor:ServerGiove5",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE Core 5",
                "label": "Temperatura Server GIOVE Core 5"
            },
            "arces/servers/mars/giove/cpu/core-4/temperature": {
                "observation": "arces-monitor:ServerGiove4",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE Core 4",
                "label": "Temperatura Server GIOVE Core 4"
            },
            "arces/servers/mars/giove/cpu/core-3/temperature": {
                "observation": "arces-monitor:ServerGiove3",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE Core 3",
                "label": "Temperatura Server GIOVE Core 3"
            },
            "arces/servers/mars/giove/cpu/core-2/temperature": {
                "observation": "arces-monitor:ServerGiove2",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE Core 2",
                "label": "Temperatura Server GIOVE Core 2"
            },
            "arces/servers/mars/giove/cpu/core-1/temperature": {
                "observation": "arces-monitor:ServerGiove1",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE Core 1",
                "label": "Temperatura Server GIOVE Core 1"
            },
            "arces/servers/mars/mml/hd/sda/temperature": {
                "observation": "arces-monitor:ServerMmlHDDSda",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server MML HDD SDA",
                "label": "Temperatura Server MML HDD SDA"
            },
            "arces/servers/mars/mml/hd/sdb/temperature": {
                "observation": "arces-monitor:ServerMmlHDDSdb",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server MML HDD SDB",
                "label": "Temperatura Server MML HDD SDB"
            },
            "arces/servers/mars/giove/hd/sda/temperature": {
                "observation": "arces-monitor:ServerGioveHDDSda",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE HDD SDA",
                "label": "Temperatura Server GIOVE HDD SDA"
            },
            "arces/servers/mars/giove/hd/sdb/temperature": {
                "observation": "arces-monitor:ServerGioveHDDSdb",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE HDD SDB",
                "label": "Temperatura Server GIOVE HDD SDB"
            },
            "arces/servers/mars/giove/hd/sdc/temperature": {
                "observation": "arces-monitor:ServerGioveHDDSdc",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE HDD SDC",
                "label": "Temperatura Server GIOVE HDD SDC"
            },
            "arces/servers/mars/giove/hd/sdd/temperature": {
                "observation": "arces-monitor:ServerGioveHDDSdd",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE HDD SDD",
                "label": "Temperatura Server GIOVE HDD SDD"
            },
            "arces/servers/mars/giove/hd/sdf/temperature": {
                "observation": "arces-monitor:ServerGioveHDDSdf",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE HDD SDF",
                "label": "Temperatura Server GIOVE HDD SDF"
            },
            "arces/servers/mars/giove/hd/sdg/temperature": {
                "observation": "arces-monitor:ServerGioveHDDSdg",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE HDD SDG",
                "label": "Temperatura Server GIOVE HDD SDG"
            },
            "arces/servers/mars/giove/hd/sdh/temperature": {
                "observation": "arces-monitor:ServerGioveHDDSdh",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server GIOVE HDD SDH",
                "label": "Temperatura Server GIOVE HDD SDH"
            },
            "arces/servers/mars/marsamba/hd/sda/temperature": {
                "observation": "arces-monitor:ServerSambaHDDSda",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server SAMBA HDD SDA",
                "label": "Temperatura Server SAMBA HDD SDA"
            },
            "arces/servers/mars/marsamba/hd/sdb/temperature": {
                "observation": "arces-monitor:ServerSambaHDDSdb",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura Server SAMBA HDD SDB",
                "label": "Temperatura Server SAMBA HDD SDB"
            },
            "arces/servers/ares/ercole/hd/sda/temperature": {
                "observation": "arces-monitor:ServerErcoleHDDSda",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE HDD SDA",
                "label": "Temperatura Server ERCOLE HDD SDA"
            },
            "arces/servers/ares/ercole/hd/sdb/temperature": {
                "observation": "arces-monitor:ServerErcoleHDDSdb",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Ares",
                "comment": "Temperatura Server ERCOLE HDD SDB",
                "label": "Temperatura Server ERCOLE HDD SDB"
            },
            "5CCF7F15676D/temperature": {
                "observation": "arces-monitor:5CCF7F15676D-temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura zona rack sala server Toffano",
                "label": "Temperatura zona rack"
            },
            "5CCF7F15676D/humidity": {
                "observation": "arces-monitor:5CCF7F15676D-humidity",
                "unit": "qudt-unit-1-1:Percent",
                "location": "arces-monitor:Mars",
                "comment": "Umidità zona rack sala server Toffano",
                "label": "Umidità zona rack"
            },
            "5CCF7F1B599E/temperature": {
                "observation": "arces-monitor:5CCF7F1B599E-temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura zona finestra sala server Toffano",
                "label": "Temperatura zona finestra"
            },
            "5CCF7F1B599E/humidity": {
                "observation": "arces-monitor:5CCF7F1B599E-humidity",
                "unit": "qudt-unit-1-1:Percent",
                "location": "arces-monitor:Mars",
                "comment": "Umidità zona finestra sala server Toffano",
                "label": "Umidità zona finestra"
            },
            "5CCF7F151DC9/temperature": {
                "observation": "arces-monitor:5CCF7F151DC9-temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Mars",
                "comment": "Temperatura esterna sala server Toffano",
                "label": "Temperatura esterna"
            },
            "5CCF7F1B58AC/temperature": {
                "observation": "arces-monitor:5CCF7F1B58AC-temperature",
                "unit": "qudt-unit-1-1:DegreeCelsius",
                "location": "arces-monitor:Star",
                "comment": "Temperatura zona rack sala server Pepoli",
                "label": "Temperatura zona rack"
            },
            "5CCF7F1B58AC/humidity": {
                "observation": "arces-monitor:5CCF7F1B58AC-humidity",
                "unit": "qudt-unit-1-1:Percent",
                "location": "arces-monitor:Star",
                "comment": "Umidità zona rack sala server Pepoli",
                "label": "Umidità zona rack"
            }
        }
    },
    "updates": {
        "REMOVE_PLACE": {
            "sparql": "DELETE WHERE {?place ?s ?p}",
            "forcedBindings": {
                "place": {
                    "type": "uri",
                    "value": "arces-monitor:Mars"
                }
            }
        },
        "ADD_PLACE": {
            "sparql": "INSERT DATA {?place rdf:type gn:Feature; gn:name ?name ; wgs84_pos:lat ?lat ; wgs84_pos:long ?long}",
            "forcedBindings": {
                "place": {
                    "type": "uri",
                    "value": "arces-monitor:Mars"
                },
                "name": {
                    "type": "literal",
                    "value": "Mars"
                },
                "lat": {
                    "type": "literal",
                    "value": "44.489664",
                    "datatype": "xsd:decimal"
                },
                "long": {
                    "type": "literal",
                    "value": "11.357023",
                    "datatype": "xsd:decimal"
                }
            }
        },
        "MQTT_MESSAGE": {
            "sparql": "DELETE {?oldMessage rdf:type mqtt:Message ; mqtt:hasValue ?oldValue ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?oldTimestamp} INSERT {?message rdf:type mqtt:Message ; mqtt:hasValue ?value ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?timestamp} WHERE {OPTIONAL{?oldMessage rdf:type mqtt:Message ; mqtt:hasValue ?oldValue ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?oldTimestamp} . BIND(IRI(CONCAT(\"http://wot.arces.unibo.it/mqtt#Message-\",STRUUID())) AS ?message) . BIND(now() AS ?timestamp)}",
            "forcedBindings": {
                "value": {
                    "type": "literal",
                    "value": "mqttValueXYZ"
                },
                "topic": {
                    "type": "literal",
                    "value": "mqttTopicXYZ"
                },
                "broker": {
                    "type": "uri",
                    "value": "tcp://giove.arces.unibo.it:52887"
                }
            }
        },
        "LOG_QUANTITY": {
            "sparql": "INSERT {?log arces-monitor:refersTo ?quantity ; qudt-1-1:numericValue ?value ; qudt-1-1:unit ?unit ; time:inXSDDateTimeStamp ?timestamp} WHERE {BIND(IRI(CONCAT(\"http://wot.arces.unibo.it/monitor#Log-\",STRUUID())) AS ?log) . BIND(now() AS ?timestamp)}",
            "graphs": {
                "using-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt/log",
                "using-named-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt/log"
            },
            "forcedBindings": {
                "quantity": {
                    "type": "uri",
                    "value": "arces-monitor:QuantityValueXYZ"
                },
                "unit": {
                    "type": "uri",
                    "value": "qudt-unit-1-1:DegreeCelsius"
                },
                "value": {
                    "type": "literal",
                    "value": "1234"
                }
            }
        },
        "REMOVE_OBSERVATION": {
            "sparql": "DELETE WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasFeatureOfInterest ?location ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit . ?quantity qudt-1-1:numericValue ?value}",
            "forcedBindings": {
                "observation": {
                    "type": "uri",
                    "value": "arces-monitor:ObservationXYZ"
                }
            }
        },
        "ADD_OBSERVATION": {
            "sparql": "INSERT {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; sosa:hasFeatureOfInterest ?location ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue 'NaN'} WHERE {BIND(IRI(CONCAT(\"http://wot.arces.unibo.it/monitor#QuantityValue-\",STRUUID())) AS ?quantity)}",
            "forcedBindings": {
                "observation": {
                    "type": "uri",
                    "value": "arces-monitor:ObservationXYZ"
                },
                "comment": {
                    "type": "literal",
                    "value": "This is an observation"
                },
                "label": {
                    "type": "literal",
                    "value": "The observation XYZ"
                },
                "location": {
                    "type": "uri",
                    "value": "arces-monitor:Mars"
                },
                "topic": {
                    "type": "literal",
                    "value": "mqttTopicXYZ"
                },
                "unit": {
                    "type": "uri",
                    "value": "qudt-unit-1-1:DegreeCelsius"
                }
            }
        },
        "UPDATE_OBSERVATION_VALUE": {
            "sparql": "DELETE {?quantity qudt-1-1:numericValue ?oldValue} INSERT {?quantity qudt-1-1:numericValue ?value} WHERE {?observation rdf:type sosa:Observation ; sosa:hasResult ?quantity . OPTIONAL {?quantity qudt-1-1:numericValue ?oldValue}}",
            "forcedBindings": {
                "observation": {
                    "type": "uri",
                    "value": "arces-monitor:ObservationXYZ"
                },
                "value": {
                    "type": "literal",
                    "datatype": "xsd:decimal",
                    "value": "12345.67890"
                }
            }
        }
    },
    "queries": {
        "LOG_QUANTITY": {
            "sparql": "SELECT * WHERE {?log arces-monitor:refersTo ?quantity ; qudt-1-1:numericValue ?value; time:inXSDDateTimeStamp ?timestamp}",
            "graphs": {
                "default-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt/log",
                "named-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt/log"
            }
        },
        "PLACES": {
            "sparql": "SELECT * WHERE {?place rdf:type gn:Feature; gn:name ?name ; wgs84_pos:lat ?lat ; wgs84_pos:long ?long}"
        },
        "OBSERVATIONS_TOPICS": {
            "sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; arces-monitor:hasMqttTopic ?topic}"
        },
        "OBSERVATIONS": {
            "sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasFeatureOfInterest ?location ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit . OPTIONAL {?quantity qudt-1-1:numericValue ?value}}"
        },
        "OBSERVATIONS_BY_LOCATION": {
            "sparql": "SELECT * WHERE { ?observation sosa:hasFeatureOfInterest ?location ; rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ;  qudt-1-1:numericValue ?value}",
            "forcedBindings": {
                "location": {
                    "type": "uri",
                    "value": "arces-monitor:Mars"
                }
            }
        },
        "OBSERVATIONS_BY_UNIT": {
            "sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasFeatureOfInterest ?location ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ;  qudt-1-1:numericValue ?value}",
            "forcedBindings": {
                "unit": {
                    "type": "uri",
                    "value": "qudt-unit-1-1:DegreeCelsius"
                }
            }
        },
        "ALL_VALUES": {
            "sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasFeatureOfInterest ?location ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ;  qudt-1-1:numericValue ?value}",
            "forcedBindings": {
                "observation": {
                    "type": "uri",
                    "value": "arces-monitor:ObservationXYZ"
                }
            }
        },
        "MQTT_TOPICS_COUNT": {
            "sparql": "SELECT (COUNT(DISTINCT ?topic) AS ?topics) WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic}"
        },
        "MQTT_TOPICS": {
            "sparql": "SELECT DISTINCT * WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker}"
        },
        "MQTT_TOPIC_VALUE": {
            "sparql": "SELECT * WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic; mqtt:hasValue ?value}",
            "forcedBindings": {
                "topic": {
                    "type": "literal",
                    "value": "mqttTopicXYZ"
                }
            }
        },
        "MQTT_MESSAGES": {
            "sparql": "SELECT * WHERE {?message rdf:type mqtt:Message ; mqtt:hasValue ?value ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker}"
        }
    }
}