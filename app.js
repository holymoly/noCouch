var request = require('request');

//*****************************************************
//*             Call the couch                        *
//*****************************************************
function requestCouch(url,type,method,data,destination,cb){
  var contentLength = 0;
  if(data !== undefined){
    data = JSON.stringify(data);
    var contentLength = data.length;
  }
  //Returns the welcome message and version information
  request({
    headers: {
      'Accept': 'application/json',
      'Content-Length': contentLength,
      'Content-Type': 'application/json',
      'Destination': destination,
    },
    uri: url + type,
    body: data,
    method: method
  }, function (err, res, body) {
    if (err) {
      cb(err,undefined);
    }
    if (!err && res.statusCode == 200) {
      cb(undefined,body);
    }
  });
}

//*****************************************************
//*                 Requests                          *
//*****************************************************
//Returns welcom message
var getWelcome = function(url){
  requestCouch(url,'/','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns active tasks
var getActiveTasks = function(url){
  requestCouch(url,'/_active_tasks','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns all dbs
var getAllDbs = function(url){
  requestCouch(url,'/_all_dbs','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns config sections
var getConfig = function(url){
  requestCouch(url,'/_config','GET',undefined,undefined,function(err,responsve){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};


//Returns config sections
var getConfigSection = function(url,section){
  requestCouch(url,'/_config/' + section,'GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns config sections keys
var getConfigSectionKey = function(url,section,key){
  requestCouch(url,'/_config/' + section +'/' + key,'GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};


//Sets config sections keys
var putConfigSectionKey = function(url,section,key,data){
  requestCouch(url,'/_config/' + section +'/' + key,'PUT',data,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Delete config sections keys
var deleteConfigSectionKey = function(url,section,key,data){
  requestCouch(url,'/_config/' + section +'/' + key,'DELETE',data,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns a list of all database events in the CouchDB instance.
var getDbUpdates = function(url){
  requestCouch(url,'/_db_updates','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns logs
var getLog = function(url){
  requestCouch(url,'/_log','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//creates a db
var putDb = function(url,db){
  requestCouch(url,'/' + db,'PUT',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Creates document in db
var postDb = function(url,db,data){
  requestCouch(url,'/' + db,'POST',data,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Delete db
var deleteDb = function(url,db){
  requestCouch(url,'/' + db,'DELETE',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Head information of db
var headDb = function(url,db){
  requestCouch(url,'/' + db,'HEAD',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns informations about the db
var getDb = function(url,db){
  requestCouch(url,'/' + db,'GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns all documents in the given database
var getDbAllDocs = function(url,db){
  requestCouch(url,'/' + db + '/_all_docs','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns all documents with given id
var postDbAllDocs = function(url,db,id){
  requestCouch(url,'/' + db + '/_all_docs','POST',id,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Create or update multiple docs
var postDbBulkDocs = function(url,db,data){
  requestCouch(url,'/' + db + '/_bulk_docs','POST',data,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns all documents in the given database
var getDbChanges = function(url,db){
  requestCouch(url,'/' + db + '/_changes','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns changes for the given database for certain document IDs
var postDbChanges = function(url,db,data){
  requestCouch(url,'/' + db + '/_changes?filter=_doc_ids','POST',data,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Request, configure, or stop, a replication operation.
var postReplicate = function(url,data){
  requestCouch(url,'/_replicate','POST',data,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Restarts the server
var postRestart = function(url){
  requestCouch(url,'/_restart','POST',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns Cookie-based login user information
var getSession = function(url){
  requestCouch(url,'/_session','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Authenticates user by Cookie-based user login
var postSession = function(url,user,password){
  requestCouch(url,'/_session','POST',{"name": user,"password": password},undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Logout Cookie-based user
var deleteSession = function(url){
  requestCouch(url,'/_session','DELETE',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns server statistics
var getStats = function(url){
  requestCouch(url,'/_stats','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//CouchDB administration interface (Futon)
var getUtils = function(url){
  requestCouch(url,'/_utils','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Generates a list of UUIDs from the server
var getUuids = function(url,amount){
  requestCouch(url,'/_uuids?count=' + amount,'GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns the site icon
var getFavicon = function(url){
  requestCouch(url,'/favicon.ico','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Starts a compaction for all the views in the selected design document
var postDbCompact = function(url,db){
  requestCouch(url,'/' + db + '/_compact','POST',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Starts a compaction for all the views in the selected design document
var postDbCompactDdoc = function(url,db,ddoc){
  requestCouch(url,'/' + db + '/_compact/' + ddoc,'POST',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Creates a new design document or new version of an existing one
var putDbDesignDdoc = function(url,db,ddoc,data){
  requestCouch(url,'/' + db + '/_design/' + ddoc,'PUT',data,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns the design document
var getDbDesignDdoc = function(url,db,ddoc){
  requestCouch(url,'/' + db + '/_design/' + ddoc,'GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns bare information in the HTTP Headers for the design document
var headDbDesignDdoc = function(url,db,ddoc){
  requestCouch(url,'/' + db + '/_design/' + ddoc,'HEAD',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Deletes the design document
var deleteDbDesignDdoc = function(url,db,ddoc){
  requestCouch(url,'/' + db + '/_design/' + ddoc,'DELETE',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Copies the design document
var copyDbDesignDdoc = function(url,db,ddoc,destination){
  requestCouch(url,'/' + db + '/_design/' + ddoc,'COPY',undefined,destination,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

//Returns view index information for the specified design document
var getDbDesignDdocInfo = function(url,db,ddoc){
  requestCouch(url,'/' + db + '/_design/' + ddoc + '/_info','GET',undefined,undefined,function(err,response){
    if (err) {
      throw err;
    }else{
      console.log(response);
    }
  });
};

getWelcome('http://192.168.123.35:5984');
//getActiveTasks('http://192.168.123.35:5984');
//getAllDbs('http://192.168.123.35:5984');
//getConfig('http://192.168.123.35:5984');
//getConfigSection('http://192.168.123.35:5984','attachments');
//getConfigSectionKey('http://192.168.123.35:5984','attachments','compression_level');
//putConfigSectionKey('http://192.168.123.35:5984','log','level','debug');
//deleteConfigSectionKey('http://192.168.123.35:5984','log','level','debug');
//getDbUpdates('http://192.168.123.35:5984');
//getLog('http://192.168.123.35:5984');
//putDb('http://192.168.123.35:5984','test1');
//postDb('http://192.168.123.35:5984','test1', {'peter' : 'pan'});
//deleteDb('http://192.168.123.35:5984','test1');
//headDb('http://192.168.123.35:5984','test1');
//getDb('http://192.168.123.35:5984','test1');
//getDbAllDocs('http://192.168.123.35:5984','test_suite_db');
//postDbAllDocs('http://192.168.123.35:5984','test_suite_db',{"keys" : ["6046c75a762c70dd6d7c7b3195033586"]});
//postDbBulkDocs('http://192.168.123.35:5984','test_suite_db',{"docs": [{"_id": "FishStew"},{"_id": "LambStew"}]});
//getDbChanges('http://192.168.123.35:5984','test_suite_db');
//postReplicate('http://192.168.123.35:5984',{"source": "test_suite_db","target": "test_suite_db2"});
//postRestart('http://192.168.123.35:5984');
//getSession('http://192.168.123.35:5984');
//postSession('http://192.168.123.35:5984','root','relax');
//deleteSession('http://192.168.123.35:5984');
//getStats('http://192.168.123.35:5984');
//getUtils('http://192.168.123.35:5984');
//getUuids('http://192.168.123.35:5984',10);
//getFavicon('http://192.168.123.35:5984');
//postDbChanges('http://192.168.123.35:5984','test_suite_db', {"doc_ids": ["FishStew"]});
//postDbCompact('http://root:relax@192.168.123.35:5984','test_suite_db');
//postDbCompactDdoc('http://192.168.123.35:5984','test_suite_db','');
//putDbDesignDdoc('http://root:relax@192.168.123.35:5984','test1','example',{"_id" : "_design/example","views" : {"foo" : {"map" : "function(doc){ emit(doc._id, doc._rev)}"}}});
//getDbDesignDdoc('http://192.168.123.35:5984','test1','example');
//headDbDesignDdoc('http://192.168.123.35:5984','test1','example');
//deleteDbDesignDdoc('http://root:relax@192.168.123.35:5984','test1','example?rev=3-5dac715cb734d6331128995ab3094fb7');
//copyDbDesignDdoc('http://192.168.123.35:5984','test1','example','example2');
//getDbDesignDdocInfo('http://192.168.123.35:5984','test1','example');