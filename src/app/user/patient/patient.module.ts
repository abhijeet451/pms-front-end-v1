import { AppointmentComponent } from './appointment/appointment.component';
// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Module
import { SharedImportsModule } from 'src/app/shared/shared-imports.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// Component
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { DemographicComponent } from './demographic/demographic.component';
import { AllergyComponent } from './allergy/allergy.component';
import { PatientComponent } from './patient.component';

//others
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticatedLayoutComponent } from 'src/app/shared/components/layouts/authenticated-layout/authenticated-layout.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginTokenInterceptor } from 'src/app/shared/interceptors/loginTokenInterceptor.service';
import { UserService } from '../user.service';
import { UserComponent } from '../user.component';
import { PatientService } from './patient.service';

// const routes: Routes = 
// 	[{
// 	path: '',
// 	component: AuthenticatedLayoutComponent,
// 	children: 

// 		[{
// 		path: '',
// 		component: UserComponent,
// 		children:

// 			[{
// 			path: '',
// 			component: PatientComponent,

// 			children:
// 				[{path: '',
// 					redirectTo: 'dashboard',
// 					pathMatch: 'full'},

// 					{path: 'dashboard',
// 					component: PatientDashboardComponent,},

// 					{path: 'profile',
// 					component: ProfileComponent},

// 					{path: 'change-password',
// 					component: ChangePasswordComponent},

// 					{path: 'allergy',
// 					component: AllergyComponent
// 				}]
// 			}]
// 		}]
// 	}];

@NgModule({
  declarations: [
	PatientComponent,
	PatientDashboardComponent,
	DemographicComponent,
	AllergyComponent,
	AppointmentComponent,
	
	],
  imports: [
		SharedImportsModule,
		NgMultiSelectDropDownModule.forRoot()
	],
	exports: [
	],
  providers: [
	PatientService,
	{
		provide: HTTP_INTERCEPTORS,
		useClass: LoginTokenInterceptor,
		multi: true ,
	}
]
})
export class PatientModule { }