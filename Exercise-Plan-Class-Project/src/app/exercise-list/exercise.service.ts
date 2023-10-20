

import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Exercise } from '../Shared/exercisemodel';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class ExerciseService implements OnInit{
  private myExercises: Exercise [] = [

    new Exercise('Sit Up', 'A sit-up is an exercise that involves lying flat on your back, lifting your torso to a sitting position, and then lying flat again. You should do this without changing the position of your legs.', "https://static.strengthlevel.com/images/illustrations/sit-ups-1000x1000.jpg"),
    new Exercise('Oblique Twist', 'Contract your abs and sit at about a 45-degree angle. Hold the medicine ball with both hands, directly in front of you. Contracting your abs, twist slowly from your torso to your right and touch the medicine ball to the floor beside you. Pause to hold the position a moment.', 'https://static.strengthlevel.com/images/illustrations/russian-twist-1000x1000.jpg'),
    new Exercise('Flutter Kick', "What are Flutter Kicks? A Flutter Kick is an exercise that specifically targets the lower abdominal wall. You perform this move by lying on your back and using your core to “flutter” your legs up and down. You'll often see this type of move performed in Pilates, barre and strength training classes.",'https://static.strengthlevel.com/images/illustrations/flutter-kicks-1000x1000.jpg'),
    new Exercise('Squat', 'To do a squat, stand with your feet slightly greater than shoulder-width apart and your toes pointing ahead. Slowly descend, bending through the hips, knees and ankles. Stop when your knees reach a 90-degree angle.','https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg'),
    new Exercise('Hamstring Curl', 'The hamstring curl, also called a leg curl, is an exercise that strengthens the hamstrings. It involves bending your knees and moving your heels toward your butt while the rest of your body stays still. Typically, the exercise is done on a leg curl machine.', 'https://static.strengthlevel.com/images/illustrations/lying-leg-curl-1000x1000.jpg'),
    new Exercise('Hip Thrust','Perform a hip thrust by squeezing the glutes and pressing the dumbbell straight up until the hips align with the shoulders and knees. Squeeze at the top before lowering down to repeat.',"https://static.strengthlevel.com/images/illustrations/hip-thrust-1000x1000.jpg"),
    new Exercise('Calf Raise', "Exercises don't come much simpler than the calf raise. Stand up straight, then push through the balls of your feet and raise your heel until you are standing on your toes. Then lower slowly back to the start.", 'https://static.strengthlevel.com/images/illustrations/machine-calf-raise-1000x1000.jpg'),
    new Exercise('Lat Pull Down','A lat pulldown is a compound exercise that targets your back muscles. Perform the lat pulldown exercise by sitting in front of a cable machine with a pulldown bar. Grab the bar and bend your elbows to lower it closer towards your upper chest.', "https://static.strengthlevel.com/images/illustrations/close-grip-lat-pulldown-1000x1000.jpg"),
    new Exercise('Low row', "The correct form for the low row exercise is to stand with your feet hip-width apart, knees slightly bent, and your back straight. Hold a dumbbell in each hand with your palms facing inwards. Pull the dumbbells up towards your chest, keeping your elbows close to your body.",'https://static.strengthlevel.com/images/illustrations/seated-cable-row-1000x1000.jpg'),
    new Exercise('Back Extension', "A back extension exercise involves lifting your upper body to form a straight line, and then lowering yourself back down to the starting position. You can perform this exercise on the floor or on a bench.","https://static.strengthlevel.com/images/illustrations/back-extension-1000x1000.jpg"),
    new Exercise('Bench Press',"Back Exercise, lead with elbows until they can not go down any further. Keep good posture!", "https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"),
    new Exercise('Shoulder Press', "The overhead press, also known as the shoulder press or military press, is an upper-body weight training exercise in which the trainee presses a weight overhead while seated or standing. It is mainly used to develop the anterior deltoid muscles of the shoulder.", 'https://static.strengthlevel.com/images/illustrations/seated-dumbbell-shoulder-press-1000x1000.jpg' ),
    new Exercise('Tri-cep Pressdown', "Pull the elbows in close to the sides and slowly push the hands down towards the floor. <br>Straighten the arms completely before bending the elbows to return to the starting position.", "https://static.strengthlevel.com/images/illustrations/reverse-grip-tricep-pushdown-1000x1000.jpg")
  ];
  exerciseSelected = new Subject<Exercise>();
  exerciseListChange = new Subject<Exercise[]>();

  constructor(){}
  ngOnInit(): void {
    // this.exerciseListChange.getExercises().subscribe(exercises => {
    //   this.myExercises = exercises;
    // });
  }
//read
  getExercises(){
    console.log(this.myExercises);
    document.getElementById('homePic').style.display='none'
    return this.myExercises.slice();

    }
    //create
   addExercise(exercise){
    this.myExercises.push(exercise)
    this.exerciseListChange.next(this.myExercises.slice())
    console.log(this.myExercises)
  }
   //delete
   ///////////////////get help fixing this button///////////////////////
   deleteItem(name) {
    this.myExercises = this.myExercises.filter(exercise => exercise.name !== name);
    console.log(this.myExercises)
    alert('Your exercise has been succesfully removed from Exercise List!!!!')
  }
  //edit
  editExercise(exercise)
  {}
  }






