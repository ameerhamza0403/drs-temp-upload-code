import React, {useEffect, useState} from 'react';
import firebase from 'firebase';
import './upload.css'
import { arrowFunctionExpression } from '@babel/types';



let downloadUrl;
let seleItem=[];
let seleItemtype=[];
let selectedFile;
let statusofFile='Waiting..!';
let uploadTask;
// let title;
// let caption;
let Filename;
let selectcat;
let cityRef;
let getDocValue=[];
let getDocValuee=[];
let q=0;
let arrad=[];
let arrs=[];
let arrid=[];
let arrgb=[];
let arrac=[];
let getDoorType=[];
let getDoorMan=[];
let getDoorModel=[];
let arrtormax=[];
let arrdorma=[];
let arrbea=[];
let arrstanley=[];
let arrecord=[];
let arrapa=[];
let arrhotron=[];
let arrditec=[];
let arrbesam=[];
let arrdor=[];
let arrlabel=[];
let arrabloy=[];
let arrglobal=[];
let arrcame=[];
let arroptex=[];
let arrwaldoor=[];
let arrgu=[];
let arrpa=[];
let arrgilgen=[];
let arrbwn=[];
let arrerreka=[];
let arrgeze=[];
let arrentrematic=[];
let arrjmd=[];
let arreuroprojet=[];
let arrbft=[];
let arrmanusa=[];
let arrblasi=[];
let arrfaac=[];
let arrsesamo=[];
let arrgyrotech=[];
let arraprimatic=[];
let arrdaihatsu=[];
let arrreglomat=[];
let arrboonedam=[];
let values;
let valuestypes;
let valuesNod;
let valuesTitle;




let MyUpload=()=>{

    let [Upstate, setUpstate]=useState(3);
    
    

    let HandleManSelect=(event)=>{
        return(
            values = event.target.value
            // console.log(values)
            )
    }
    let HandleTypeSelect=(event)=>{
        return(
            valuestypes = event.target.value
            )
    }

    let HandleModSelect=(event)=>{
        return(
            valuesNod = event.target.value
            // console.log(valuesNod)
            )
    }

    let HandleTitle=(event)=>{
        return(
            valuesTitle = event.target.value
            )
        }


    let count=3;
    let Initiatefire=()=>{
        var firebaseConfig = {
            apiKey: "AIzaSyB9BeUsoAz_Z_9MM261eDUb1aXfAkRNGoU",
            authDomain: "drsdoors-84f19.firebaseapp.com",
            databaseURL: "https://drsdoors-84f19.firebaseio.com",
            projectId: "drsdoors-84f19",
            storageBucket: "drsdoors-84f19.appspot.com",
            messagingSenderId: "890687677953",
            appId: "1:890687677953:web:bbc3e2e75e53c6f9"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    useEffect(() => {
        Initiatefire();
        FgetData();

    },[count])

    let UploadFile=()=>{
        if((selectcat===undefined)||(values===undefined)||(valuesNod===undefined)||(valuestypes===undefined)||(valuesTitle===undefined)||(valuesTitle==='')||(selectedFile===undefined)){
            setErrs(errs = !errs);
        }

        else{
            setErrs(errs = false);
        
        let metadata = {
            contentType: 'image',
            customMetadata: {
                // 'title': {title},
			    // 'caption': {caption}
            },
        };
         // console.log(selectcat, "hahha", values)
         
        return(
            Filename= new Date().getTime()+ selectedFile.name ,
            // // console.log( new Date(new Date().getTime())),
            setUpstate(Upstate=2),
            // console.log(Filename),
            uploadTask = firebase.storage().ref().child('hamzacheck/' + Filename).put(selectedFile, metadata),
            uploadTask.on('state_changed', function(snapshot){

      }, function(error) {
            // Handle unsuccessful uploads
      }, function() {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/... */
        setUpstate(Upstate=1)  
        getUrlofFile()          
  
       })
       
        )  
    }    
     
    }
    
    if(Upstate===1){
        statusofFile='Success'
    }
    else if(Upstate===2){
        statusofFile='Uploading'

    }
    else if(Upstate===3){
        statusofFile='Waiting...!'

    }
     let handleFileSelect=(event)=>{
        return(
            
            selectedFile = event.target.files[0]
            // console.log(selectedFile)
        )
    } 

    let HandleCatSelect=(event)=>{
        return(
            selectcat = event.target.value
            // console.log(selectcat)

        )
    }

    // let Handletc= name => event =>{
    //     return(
    //         name=event.target.value
    //     )
    // }
    
    let FgetData=()=>{
        // return(
            let i=0;
            let j=0;
            //let j='table' + i;
            firebase.firestore().collection('Menufecturer').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        getDocValue[i]=doc.data().title;
                        getDocValuee[i]=doc.data().category;
                        i=i+1;
                        //j='table' + i;
                    });
                })
                .catch(err => {
                    // console.log('Error getting documents', err);
                });
                firebase.firestore().collection('Models').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        getDoorType[j]=doc.data().doorType;
                        getDoorMan[j]=doc.data().menufecturer;
                        getDoorModel[j]=doc.data().title;
                        j=j+1;
                        //j='table' + i;
                    });
                })
                .catch(err => {
                    // console.log('Error getting documents', err);
                });
                // console.log(getDoorModel)
                {funfact()}
                
        }
        let funfact=()=>{
                let kt=0;
                arrad=[];
                arrid=[];
                arrs=[];
                arrgb=[];
                arrac=[];
                getDocValuee.map(item=> {
                    if(item==="Automatic Doors"||item==="Automatic Door"){
                        arrad.push(kt);
                    }
                    else if(item==="Industrial Doors"||item==="Industrial Door"){
                        arrid.push(kt)
                    }
                    else if(item==="Sensors"||item==="Sensor"){
                        arrs.push(kt)
                    }
                    else if(item==="Gates & Barriers"||item==="Gates & Barrier"||item==="Gates Barrier"||item==="Gates Barriers"){
                        arrgb.push(kt)
                    }
                    else if(item==="Access Controls"||item==="Access Control"){
                        arrac.push(kt)
                    }
                    kt=kt+1;
                })
                
                whatthefuck()


        }

        // for doortype
        let funfacttype=()=>{
            let kt=0;
            arrtormax=[];
            arrdorma=[];
            arrbea=[];
            arrstanley=[];
            arrecord=[];
            arrapa=[];
            arrhotron=[];
            arrditec=[];
            arrbesam=[];
            arrdor=[];
            arrlabel=[];
            arrabloy=[];
            arrglobal=[];
            arrcame=[];
            arroptex=[];
            arrwaldoor=[];
            arrgu=[];
            arrpa=[];
            arrgilgen=[];
            arrbwn=[];
            arrerreka=[];
            arrgeze=[];
            arrentrematic=[];
            arrjmd=[];
            arreuroprojet=[];
            arrbft=[];
            arrmanusa=[];
            arrblasi=[];
            arrfaac=[];
            arrsesamo=[];
            arrgyrotech=[];
            arraprimatic=[];
            arrdaihatsu=[];
            arrreglomat=[];
            arrboonedam=[];
            getDoorMan.map(item=> {
                if(item==="TORMAX"){
                    arrtormax.push(kt);
                }
                else if(item==="DORMA"){
                    arrdorma.push(kt)
                }
                else if(item==="BEA"){
                    arrbea.push(kt)
                }
                else if(item==="STANLEY"){
                    arrstanley.push(kt)
                }
                else if(item==="RECORD"){
                    arrecord.push(kt)
                }
                else if(item==="APA"){
                    arrapa.push(kt)
                }
                else if(item==="Hotron"){
                    arrhotron.push(kt)
                }
                else if(item==="DITEC"){
                    arrditec.push(kt)
                }
                else if(item==="BESAM"){
                    arrbesam.push(kt)
                }
                else if(item==="DOR-O-MATIC"){
                    arrdor.push(kt)
                }
                else if(item==="LABEL"){
                    arrlabel.push(kt)
                }
                else if(item==="ABLOY"){
                    arrabloy.push(kt)
                }
                else if(item==="GLOBAL"){
                    arrglobal.push(kt)
                }
                else if(item==="CAME"){
                    arrcame.push(kt)
                }
                else if(item==="Optex"){
                    arroptex.push(kt)
                }
                else if(item==="WALDOOR"){
                    arrwaldoor.push(kt)
                }
                else if(item==="G-U"){
                    arrgu.push(kt)
                }
                else if(item==="PA"){
                    arrpa.push(kt)
                }
                else if(item==="GILGEN"){
                    arrgilgen.push(kt)
                }
                else if(item==="BWN"){
                    arrbwn.push(kt)
                }
                else if(item==="ERREKA"){
                    arrerreka.push(kt)
                }
                else if(item==="GEZE"){
                    arrgeze.push(kt)
                }
                else if(item==="ENTREMATIC"){
                    arrentrematic.push(kt)
                }
                else if(item==="JMD"){
                    arrjmd.push(kt)
                }
                else if(item==="EUROPROJET"){
                    arreuroprojet.push(kt)
                }
                else if(item==="BFT"){
                    arrbft.push(kt)
                }
                else if(item==="MANUSA"){
                    arrmanusa.push(kt)
                }
                else if(item==="BLASI"){
                    arrblasi.push(kt)
                }
                else if(item==="FAAC"){
                    arrfaac.push(kt)
                }
                else if(item==="SESAMO"){
                    arrsesamo.push(kt)
                }
                else if(item==="GYROTECH"){
                    arrgyrotech.push(kt)
                }
                else if(item==="APRIMATIC"){
                    arraprimatic.push(kt)
                }
                else if(item==="DAIHATSU"){
                    arrdaihatsu.push(kt)
                }
                else if(item==="Reglomat"){
                    arrreglomat.push(kt)
                }
                else if(item==="Boon Edam"){
                    arrboonedam.push(kt)
                }
                kt=kt+1;
            })
            // console.log(arrboonedam)
            whatthefucktype()


    }


        let whatthefuck=()=>{
            seleItem=[];
            if(selectcat==="Access Controls"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDocValue.map(item=> {
                    if(kg===arrac[c]){
                        c=c+1;
                        seleItem[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItem)

            }
            else if(selectcat==="Automatic Doors"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDocValue.map(item=> {
                    if(kg===arrad[c]){
                        c=c+1;
                        seleItem[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItem)

            }
            else if(selectcat==="Gates & Barriers"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDocValue.map(item=> {
                    if(kg===arrgb[c]){
                        c=c+1;
                        seleItem[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItem)

            }
            else if(selectcat==="Industrial Doors"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDocValue.map(item=> {
                    if(kg===arrid[c]){
                        c=c+1;
                        seleItem[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItem)

            }
            else if(selectcat==="Sensors"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDocValue.map(item=> {
                    if(kg===arrs[c]){
                        c=c+1;
                        seleItem[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItem)

            }
            
        }

        // whatthefuck for DoorModel

        let whatthefucktype=()=>{
            seleItemtype=[];
            if(values==="TORMAX"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrtormax[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="DORMA"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrdorma[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="BEA"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrbea[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="STANLEY"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrstanley[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="RECORD"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrecord[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="APA"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrapa[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="Hotron"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrhotron[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="DITEC"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrditec[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="BESAM"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrbesam[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
           
            
            else if(values==="DOR-O-MATIC"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrdor[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            
            else if(values==="LABEL"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrlabel[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="ABLOY"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrabloy[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="GLOBAL"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrglobal[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="CAME"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrcame[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="Optex"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arroptex[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="WALDOOR"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrwaldoor[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="G-U"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrgu[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="PA"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrpa[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="GILGEN"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrgilgen[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="BWN"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrbwn[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="ERREKA"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrerreka[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="GEZE"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrgeze[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="ENTREMATIC"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrentrematic[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            
            else if(values==="JMD"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrjmd[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="EUROPROJET"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arreuroprojet[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="BFT"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrbft[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="MANUSA"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrmanusa[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="BLASI"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrblasi[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="FAAC"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrfaac[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="SESAMO"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrsesamo[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="GYROTECH"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrgyrotech[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="APRIMATIC"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arraprimatic[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="DAIHATSU"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrdaihatsu[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="Reglomat"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrreglomat[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            else if(values==="Boon Edam"){
                // console.log("hello")
                let kg=0;
                let c=0;
                getDoorModel.map(item=> {
                    if(kg===arrboonedam[c]){
                        c=c+1;
                        seleItemtype[c]=item;            
                        }
                        kg=kg+1;
                        })        
                        // console.log(seleItemtype)

            }
            
            
        }



        let Refresh="load";
        let phusi='';
        let fick=()=>{
            funfact()
            poi()

        }
        let [sef,setSef]=useState(false);
        let poi=()=>{
            return(
                setSef(sef=!sef)
            )
        }
        if(sef){
            phusi= <div className="col-3"><p>Select A Manufacturer</p><label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Category</label><select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={HandleManSelect}><option value="other" selected>Select One...</option><option value="Other" >Other</option>{seleItem.map(item=>(<option key={item} value={item}>{item}</option>))}</select></div>
            Refresh="Clear";
        }


        //type

        let Refreshtype="load";
        let phusitype='';
        let reftypebutton='';
        let ficktype=()=>{
            funfacttype()
            poitype()

        }
        let [seftype,setSeftype]=useState(false);
        let poitype=()=>{
            return(
                setSeftype(seftype=!seftype)
            )
        }
        if(seftype){
            phusitype= <div className="row"><div className="col-3"><p>Select Door Model</p><label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Type</label><select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={HandleModSelect}><option value="other" >Select One...</option><option value="Other" >Other</option>{seleItemtype.map(item=>(<option key={item} value={item}>{item}</option>))}</select></div>
            <div className="col-3"><p>Select Door Type</p><label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Type</label><select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={HandleTypeSelect}><option value="other" selected>Select One...</option><option value="Sliding Door" >Sliding Door</option><option value="Swing Door" >Swing Door</option><option value="Folding Door" >Folding Door</option><option value="Other" >Other</option></select></div></div>
            Refreshtype="Clear";
        }
        if(sef){
            reftypebutton= <button type="submit" class="btn btn-primary" onClick={ficktype}>{Refreshtype}</button>
        }

    let [errs,setErrs]=useState(false);
    let errmsg='';
    if(errs){
            errmsg=<div><div class="alert alert-danger" role="alert">Please Complete All Fields Before Submitting..! Tip: Select Other for empty Fields.</div></div>
    }
    else{
        errmsg='';
    }
        let AddtoDataBase=()=>{
            
            let db = firebase.firestore();
            // var database = db.database();
            //let usersRef = db.ref().child('Hello');
            let usersRefre = db.collection("Hello").add({
                category: selectcat,
                menufecturer: values,
                model: valuesNod,
                subCategory: valuestypes,
                title: valuesTitle,
                url:downloadUrl,
                //url: {},
            })
            .then(function(docRef) {
                // console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            // usersRef.set({
            /* var alovelace= {
                date_of_birth: "June 23, 1912",
                full_name: "Alan Turing"
            }
            // });
            usersRef.push(alovelace); */
            
        };


 
        let getUrlofFile=()=>{
                let imgurl="hamzacheck/" + Filename
                // // console.log(imgurl)
            // Create a reference to the file we want to download
                let starsRef =firebase.storage().ref().child(imgurl);

                // Get the download URL
                let imgur = starsRef.getDownloadURL().then(function(url) {
                    // console.log(imgur);
                    let xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = function(event) {
                      var blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();
                  
                    // Or inserted into an <img> element:
                    downloadUrl=url;
                    // console.log(url)
                    AddtoDataBase()
                  }).catch(function(error) {
                    // Handle any errors
                  });
        } 

    return(
        <div className="container">
             <form>
                <p>Choose A Pdf File</p>
                <div className="row">
                    <div className="col-4">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile" onChange={handleFileSelect}/>
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Title</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" onChange={HandleTitle}/>
                    </div>
                    </div>
                </div>
                </form>
                <form>
                <div class="form-row align-items-center">
                    <div class="col-auto my-1">
                    <p>Select A Category</p>
                        <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Category</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={HandleCatSelect}>
                        <option value="other" selected>Select One...</option>
                        <option value="Access Controls">Access Control</option>
                        <option value="Automatic Doors">Automatic Doors</option>
                        <option value="Gates & Barriers">Gates & Barrier</option>
                        <option value="Industrial Doors">Industrial Doors</option>
                        <option value="Sensors">Sensors</option>
                        <option value="other">Other</option>
                        </select>
                </div>
                </div>
                </form>
                <button type="submit" class="btn btn-primary" onClick={fick}>{Refresh}</button>
                {phusi}
                {reftypebutton}
                {phusitype}



                <br></br>
                <br></br>

                {errmsg}
                <div class="form-group row">
                    <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary" onClick={UploadFile}>Submit</button>{statusofFile}
                    </div>
                </div>
 

        </div>
    )
}

export default MyUpload;