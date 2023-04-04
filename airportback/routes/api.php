<?php
use App\http\Controllers\BagageController;
use App\http\Controllers\VolController;
use App\http\Controllers\PassagerController;
use App\http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//route sans login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
// Route::get('/volspass', [VolController::class, 'index']);
// Route::post('/passager', [PassagerController::class, 'store']);
 
//route apres login
 Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/userliste', [AuthController::class, 'index']);  
    
    //vols
    Route::get('/vols', [VolController::class, 'index']);
    Route::get('/vols/{vol}', [VolController::class, 'show']);
    Route::post('/vols', [VolController::class, 'store']);
    Route::delete('/vols/{vol}', [VolController::class, 'destroy']);
    Route::put('/vols/{vol}', [VolController::class, 'update']);
    Route::get('/nbvols', [VolController::class, 'compter']);
    //Passager
    Route::get('/passager', [PassagerController::class, 'index']);
    Route::get('/passager/{passager}', [PassagerController::class, 'show']);
    Route::get('/nbpassager', [PassagerController::class, 'compter']);
    //bagage
    Route::get('/bagage', [BagageController::class, 'index']);
    Route::get('/bagage/{bagage}', [BagageController::class, 'show']);
    Route::post('/bagage', [BagageController::class, 'store']);
    Route::get('/nbbagage', [BagageController::class, 'compter']);
  });

