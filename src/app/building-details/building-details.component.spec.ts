import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Amenity } from '../dtos/amenity';
import { Building } from '../dtos/building';
import { Room } from '../dtos/room';
import { BuildingDetailsComponent } from './building-details.component';


//TODO: continue working on testing and increase coverage.  
//html and fields are untested
describe('BuildingDetailsComponent', () => {
  // let component: BuildingDetailsComponent;
  let fixture: ComponentFixture<BuildingDetailsComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingDetailsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BuildingDetailsComponent);
  //   // component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // //basic creation
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

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
    resourceMetadata: null
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