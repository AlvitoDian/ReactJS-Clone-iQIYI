<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/movie/{id}', [HomeController::class, 'show'])->name('detail-movie');

Route::get('/actor-movie/{id}/{startSlice}/{lengthSlice}', [HomeController::class, 'actorFromCurrentMovies'])->name('actor-movie');

Route::get('/actor/{id}', [HomeController::class, 'singleActor'])->name('detail-actor');

Route::get('/filter-movies', [HomeController::class, 'filterMovies'])->name('filter-movies');
