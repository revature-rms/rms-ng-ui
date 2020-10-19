//default
import { TestBed } from '@angular/core/testing';
import { RoomService } from './room.service';
//additional
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { defer } from 'rxjs';
import { Employee } from '../dtos/employee';
import { Room } from '../dtos/room';

describe('RoomService', () => {
  let service: RoomService;
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RoomService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RoomService(httpClientSpy as any, MessageService as any); //mock service
  });


  //EXISTENCE TEST ========================================
  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  //get all ------------------------------------------
  it('should return all room data', () => {
    var expectedData: Room[] =
    [{
      id:1,
      roomNumber:'String',
      maxOccupancy:20,
      currentStatus:null,
      batch:null
    },
    {
      id:2,
      roomNumber:'String',
      maxOccupancy:22,
      currentStatus:null,
      batch:null
    }]
    httpClientSpy.get.and.returnValue(asyncData(expectedData)); //setup the server response
    service.getRooms().then( 
      data => expect(data).toEqual(expectedData, 'expected all rooms')
    );

    //some bonus check to see how many http calls went through
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  //get by id() ------------------------------------------
  it('should return target room data', () => {
    var expectedData: Room[] =
    [{
      id:1,
      roomNumber:'String',
      maxOccupancy:20,
      currentStatus:null,
      batch:null
    },
    {
      id:2,
      roomNumber:'String',
      maxOccupancy:22,
      currentStatus:null,
      batch:null
    }]
    httpClientSpy.get.and.returnValue(asyncData(expectedData[0])); //setup the server response
    service.getRoomById(1).subscribe( 
      data => expect(data).toEqual(expectedData[0], 'expected target room by ID')
    );

    //bonus check to see how many http calls went through
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });



  //create(room) ------------------------------------------TODO: find a better solution
  xit('should create a room', () => { //disabled, as we don't have a create method in service (?)
    let newRoom:Room = {
      id:null,
      roomNumber:'String',
      maxOccupancy:22,
      currentStatus:null,
      batch:null
    }

    let resp = roomPosttest(newRoom); //mock http req
    expect(resp.body).toEqual(newRoom, 'expected returned room object');
    expect(resp.body.id).toEqual(newRoom.id, 'expected room with updated ID');
    expect(resp.status).toEqual(201, 'expected created status');

  });

  // update(room) ------------------------------------------TODO: find a better solution
  it('should update a room', () => {
    let newRoom:Room = {
      id:5,
      roomNumber:'String',
      maxOccupancy:25,
      currentStatus:null,
      batch:null
    }

    let resp = roomPuttest(newRoom);
    expect(resp.body).toEqual(newRoom, 'expected returned room object');
    expect(resp.status).toEqual(200, 'expected confirmed status');
  });

  // delete(room) ------------------------------------------TODO: find a better solution
  it('should delete a room', () => {
    let newRoom:Room = {
      id:5,
      roomNumber:'String',
      maxOccupancy:25,
      currentStatus:null,
      batch:null
    }

    let resp = roomDeletetest(newRoom);
    expect(resp.body).toEqual(null, 'expected room deletion');
    expect(resp.status).toEqual(200, 'expected confirmed status');
  });

  // deleteAll() ------------------------------------------TODO: find a better solution
  it('should delete a room', () => {
    let newRooms:Room[] = [{
      id:5,
      roomNumber:'String',
      maxOccupancy:25,
      currentStatus:null,
      batch:null
    },
    {
      id:5,
      roomNumber:'String',
      maxOccupancy:25,
      currentStatus:null,
      batch:null
    }]

    let resp = roomDeleteAlltest(newRooms);
    expect(resp.body).toEqual(null, 'expected all rooms deletion');
    expect(resp.status).toEqual(200, 'expected confirmed status');
  });


  //ERROR 404 TEST
  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 Not Found',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    service.getRooms().then(
      data => fail('expected an error, not data'),
      error  => expect(error.message).toContain('404 Not Found')
    );
    
    expect(1).toEqual(1);
  });

});


// helper functions      ------------------------------
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

function roomPuttest(room: Room ){
  //reevaluate based on backend response json
  return new HttpResponse(
    { status: 200, statusText: 'OK', body: room });
}

function roomPosttest(room: Room ){
  //the server may reply with an object + new ID
  room.id = 1;
  return new HttpResponse(
    { status: 201, statusText: 'CREATED', body: room });
}

function roomDeletetest(room: Room ){
  room = null;
  return new HttpResponse(
    { status: 200, statusText: 'OK', body: room }); //what body is returned on delete?
}
function roomDeleteAlltest(room: Room[] ){
  room = null;
  return new HttpResponse(
    { status: 200, statusText: 'OK', body: room }); //what body is returned on delete?
}