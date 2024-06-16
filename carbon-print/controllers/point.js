const Point = require('../models/point');
const {UnauthenticatedError,BadRequestError} = require('../errors/index');
const mongoose = require('mongoose')
const {StatusCodes} = require('http-status-codes');
var http = require('http');

const getAllPoints = async (req,res)=>{
    const pointId = req.params.id;
    var isValid = mongoose.Types.ObjectId.isValid(pointId);
    if(isValid){
        const points = await Point.find({"createdBy":pointId},{"pointValue":1, "name":1, "createdAt": 1, "_id":0}).sort({createdAt:-1});
        res.status(StatusCodes.OK).json(points);
    }else{
        throw new BadRequestError(`Provided Id is invalid.`);
    }
}

const getLeaderBoard = async (req,res)=>{
   
 
}

const getEverything = async (req,res)=>{
    const pointId = req.params.id;
    var isValid = mongoose.Types.ObjectId.isValid(pointId);
    if(isValid){
        const allPoints = await Point.find({"createdBy":pointId},{"pointValue":1, "name":1, "createdAt": 1, "_id":0}).sort({createdAt:-1});
        var divByFiveList = [];
        for (var i = 0; i < 5; i++){
            if(allPoints.length < 5){
                divByFiveList = allPoints;
            }else{
                divByFiveList.push(allPoints[i]);
            }
        }
        var sum = 400;
        const listOfPoints = allPoints;
        for(var i of listOfPoints){
            console.log(i);
            var individualPoint = i["pointValue"];
            sum+= individualPoint;
        }
        res.status(StatusCodes.OK).json({"allPoints":allPoints, "sum":sum, "latestFive":divByFiveList});
    }else{
        throw new BadRequestError(`Provided Id is invalid.`);
    }
}

const getAllPointsLastFive = async (req,res)=>{
    const pointId = req.params.id;
    var isValid = mongoose.Types.ObjectId.isValid(pointId);
    if(isValid){
        var resList = [];
        const listOfPoints = await Point.find({"createdBy":pointId},{"pointValue":1, "name":1, "createdAt": 1, "_id":0}).sort({createdAt:-1});
        for (var i = 0; i < 5; i++){
            if(listOfPoints.length < 5){
                resList = listOfPoints;
            }else{
                resList.push(listOfPoints[i]);
            }
        }
        console.log(resList);
        res.status(StatusCodes.OK).json(resList);
    }else{
        throw new BadRequestError(`Provided Id is invalid.`);
    }
}

const postPoint = async(req,res)=>{
    const {name,pointValue,createdBy} = req.body;

    if(!name){
        throw new UnauthenticatedError(`Please provide name.`);
    }
    if(!pointValue){
        throw new UnauthenticatedError(`Please provide pointValue.`);
    }
    if(!createdBy){
        throw new UnauthenticatedError(`Please provide createdBy.`);
    }

    const point = await Point.create({name,pointValue,createdBy});
    res.status(StatusCodes.CREATED).json(point);
}

const sumOfPoints = async(req,res)=>{
    const pointId = req.params.id;
    var isValid = mongoose.Types.ObjectId.isValid(pointId);
    if(isValid){
        var sum = 0;
        const listOfPoints = await Point.find({"createdBy":pointId},{"pointValue":1,"_id":0});
        for(var i of listOfPoints){
            console.log(i);
            var individualPoint = i["pointValue"];
            sum+= individualPoint;
        }
        res.status(StatusCodes.OK).json({sumOfPoints:sum});
    }else{
        throw new BadRequestError(`Provided Id is invalid.`);
    }
}




module.exports = {
    getAllPoints,
    postPoint,
    sumOfPoints,
    getAllPointsLastFive,
    getEverything,
    getLeaderBoard,
}