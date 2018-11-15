<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
  /**
  * Seed the application's database.
  *
  * @return void
  */
  public function run()
  {
    // $this->call(ArticlesTableSeeder::class);
    factory(App\Article::class, 30)->create();
    // $this->call(UsersTableSeeder::class);
    
    $faker = Faker::create();
    $statuses = ['Waiting for approval', 'Approved', 'In progress'];
    foreach (range(1, 400) as $index) {
      \DB::table('projects')->insert([
        'status' => $statuses[shuffle($statuses)],
        'deadline' => $faker->dateTimeBetween('+1 month', '+2 month'),
        'budget' => rand(10000, 500000),
        ]);
      }
    }
  }
  