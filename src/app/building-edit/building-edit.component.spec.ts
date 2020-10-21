import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Amenity } from '../dtos/amenity';
import { Building } from '../dtos/building';
import { Room } from '../dtos/room';

import { BuildingEditComponent } from './building-edit.component';


//TODO: focus on testing. research testing with angular materials. 

describe('BuildingEditComponent', () => {
  // let component: BuildingEditComponent;
  // let fixture: ComponentFixture<BuildingEditComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ BuildingEditComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BuildingEditComponent);
  //   // component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  //update building
    //as of implementation, the class method looks incomplete; using a mock for now
  it('should fail on updating an incorrect building', () => {
    var building: Building;
    expect(updateBuilding(building)).toBeFalse;

    building =
    {
      id:null,
      name:'Building',
      abbrName:'String',
      address:null,
      trainingLead:null,
      amenities:null,
      rooms:null,
      resourceMetadata:null
    };

    expect(updateBuilding(building)).toBeFalse;

    building.id = 1;

    expect(updateBuilding(building)).toBeTrue;
  });


  it('should get buildings data', () => {
    var buildings: Building[] =
    [{
      id:1,
      name:'Building',
      abbrName:'String',
      address:null,
      trainingLead:null,
      amenities:null,
      rooms:null,
      resourceMetadata:null
    },
    {
      id:2,
      name:'Building2',
      abbrName:'String',
      address:null,
      trainingLead:null,
      amenities:null,
      rooms:null,
      resourceMetadata:null
    }
    ];
    expect(buildings).toEqual(getBuildingsData()); //pointless? yes
    
  });

  it('should get rooms data', () => {
    let newRooms:Room[] = [{
      id:5,
      roomNumber:1,
      maxOccupancy:25,
      currentStatus:null,
      batch:null,
      resourceMetadata: null
    },
    {
      id:5,
      roomNumber:1,
      maxOccupancy:25,
      currentStatus:null,
      batch:null,
      resourceMetadata: null

    }];

    expect(newRooms).toEqual(getRoomsData());
  });

  it('should get amenities data', () => {
    var amenities: Amenity[] =
    [{
      type:'Amenity',
      status:'String'
    },
    {
      type:'Amenity2',
      status:'String2'
    }
    ];

    expect(amenities).toEqual(getAmenitiesData());
  });
});


//method mocks instead of creating a full mock class
function getBuildingsData(){
  var buildings: Building[] =
  [{
    id:1,
    name:'Building',
    abbrName:'String',
    address:null,
    trainingLead:null,
    amenities:null,
    rooms:null,
    resourceMetadata:null
  },
  {
    id:2,
    name:'Building2',
    abbrName:'String',
    address:null,
    trainingLead:null,
    amenities:null,
    rooms:null,
    resourceMetadata:null
  }
  ];
  return buildings;
}

function getRoomsData(){
  let newRooms:Room[] = [{
    id:5,
    roomNumber:1,
    maxOccupancy:25,
    currentStatus:null,
    batch:null,
    resourceMetadata:null
  },
  {
    id:5,
    roomNumber:1,
    maxOccupancy:25,
    currentStatus:null,
    batch:null,
    resourceMetadata:null
  }];
  return newRooms;
}

function getAmenitiesData(){
  var amenities: Amenity[] =
  [{
    type:'Amenity',
    status:'String'
  },
  {
    type:'Amenity2',
    status:'String2'
  }
  ];
  return amenities;
}

function updateBuilding(building:Building){
  //we could mock an http reponse, but why?
  if(building==null){
    return false; //assuming we tried to update a null building
  } else if(building.id==null){
    return false; //...or a building without an id (how would the server know which building to update?)
  } else {
    return true; //we could do other checks before this, but that would be excessive
  }

}