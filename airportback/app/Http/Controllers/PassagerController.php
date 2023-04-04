<?php

namespace App\Http\Controllers;

use App\Models\Passager;
use Illuminate\Http\Request;

class PassagerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list_passager=Passager::all();
        return response()->json($list_passager);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $P=new Passager();
        $P->id_vol=$request->id_vol;
        $P->num_passort=$request->num_passort;
        $P->nom=$request->nom;
        $P->prenom=$request->prenom;
        $P->date_naissance=$request->date_naissance;
        $P->adresse=$request->adresse;
        $P->tel=$request->tel;
        $P->save();
        return response()->json($P);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Passager  $passager
     * @return \Illuminate\Http\Response
     */
    public function show(Passager $passager)
    {
        return response()->json(Passager::find($passager));

    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Passager  $passager
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Passager $passager)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Passager  $passager
     * @return \Illuminate\Http\Response
     */
    public function destroy(Passager $passager)
    {
        //
    }
    public function compter(){
        return response()->json(Passager::all()->count());
     }
}
