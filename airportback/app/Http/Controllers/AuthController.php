<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Cookie;

class AuthController extends Controller
{
   public function register(Request $request)
   {
    return User::create([
    'name'=> $request->input(key:'name'),
    'email'=>$request->input(key:'email'),
    'password'=>Hash::make($request->input(key:'password')),
    'poste'=>$request->input(key:'poste')
    ]);
   }

   public function login(Request $request)
   {
    if(!Auth::attempt($request->only('email','password','poste'))){
        return response(['message'=>'Invalid credentials!'],
    status:Response::HTTP_UNAUTHORIZED);
    }
  $user=Auth::user();
  
  $token=$user->createToken('token')->plainTextToken;
  $cookie=cookie('jwt',$token, minutes:60*24);//1day
  return response([
    'message'=>$token
  ])->withCookie($cookie);
}

   public function User(){
        return Auth::user();
   }
   
   public function logout(){
   $cookie=Cookie::forget('jwt');
    return response([
    'message' => 'Suceess logout'
    ])->withCookie($cookie);
    }

    public function index()
    {
        $list_users=User::all();
        return response()->json($list_users);
    }
}
