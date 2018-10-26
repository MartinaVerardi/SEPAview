 jsap = {
     "host": "localhost",
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
         "schema":"http://schema.org/",
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
     "extended": {},
     "updates": {
         "REMOVE_PLACE": {
             "sparql": "DELETE {?place ?s ?p} WHERE {?place ?s ?p}",
             "forcedBindings": {
                 "place": {
                     "type": "uri",
                     "value": "arces-monitor:Mars"
                 }
             }
         },
         "ADD_PLACE": {
             "sparql": "INSERT {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates _:cordinate . _:cordinate schema:latitude ?lat ; schema:longitude ?long} WHERE{}",
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
         "LINK_PLACES":{
             "sparql": "INSERT DATA { ?root schema:containsPlace ?child . ?child schema:containedInPlace ?root }",
             "forcedBindings":{
                 "root": {
                     "type": "uri",
                     "value": "arces-monitor:rootPlace"
                 },
                 "child": {
                     "type": "uri",
                     "value": "arces-monitor:childPlace"
                 }
             }
         },
         "DELETE_LINK_PLACES":{
             "sparql": "DELETE DATA { ?root schema:containsPlace ?child . ?child schema:containedInPlace ?root }",
             "forcedBindings":{
                 "root": {
                     "type": "uri",
                     "value": "arces-monitor:rootPlace"
                 },
                 "child": {
                     "type": "uri",
                     "value": "arces-monitor:childPlace"
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
             "sparql": "DELETE WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult ?quantity . ?location rdf:type schema:Place . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue 'NaN'}",
             "forcedBindings": {
                 "observation": {
                     "type": "uri",
                     "value": "arces-monitor:ObservationXYZ"
                 }
             }
         },
         "ADD_OBSERVATION": {
             "sparql": "INSERT {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult ?quantity . ?location rdf:type schema:Place . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue 'NaN'} WHERE {BIND(IRI(CONCAT(\"http://wot.arces.unibo.it/monitor#QuantityValue-\",STRUUID())) AS ?quantity)}",
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
             "sparql": "SELECT * WHERE {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates _:cordinate . _:cordinate schema:latitude ?lat ; schema:longitude ?long}"
         },
         "NO_CHILD": {
             "sparql": "SELECT * where {?root rdf:type schema:Place ; schema:name ?name . FILTER NOT EXISTS{?child schema:containedInPlace ?root}}"
         },
         "MAP_PLACES":{
             "sparql": "SELECT * WHERE {?root rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates _:cordinate . _:cordinate schema:latitude ?lat ; schema:longitude ?long.  FILTER NOT EXISTS{?root schema:containedInPlace ?place}}"
         },
         "CREATE_TREE":{
             "sparql": "SELECT * where { ?observation rdf:type sosa:Observation. ?child rdf:type schema:Place . ?root schema:containsPlace ?child }",
             "forcedBindings": {
                 "root": {
                     "type": "uri",
                     "value": "arces-monitor:Mars"
                 }
             }
         },
         "CONTAINED_PLACES":{
             "sparql": "SELECT * where { ?root schema:containsPlace ?child }",
             "forcedBindings": {
                 "root": {
                     "type": "uri",
                     "value": "arces-monitor:Mars"
                 }
             }
         },
         "ROOT_PLACES": {
             "sparql": "SELECT * where { ?root rdf:type schema:Place .  FILTER NOT EXISTS{?root schema:containedInPlace ?place} }"

         },
         "OBSERVATIONS_TOPICS": {
             "sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; arces-monitor:hasMqttTopic ?topic}"
         },
         "OBSERVATIONS": {
             "sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasResult ?quantity ; sosa:hasFeatureOfInterest ?location . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit . OPTIONAL {?quantity qudt-1-1:numericValue ?value}}"
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