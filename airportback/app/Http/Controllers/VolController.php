<?php

namespace App\Http\Controllers;

use App\Models\vol;
use Illuminate\Http\Request;

class VolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list_vols=vol::all();
        return response()->json($list_vols);
    }

  

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $V=new vol();
        $V->ville_depart=$request->ville_depart;
        $V->ville_arrive=$request->ville_arrive;
        $V->date_depart=$request->date_depart;
        $V->date_arrive=$request->date_arrive;
        $V->heure_depart=$request->heure_depart;
        $V->heure_arrive=$request->heure_arrive;
        $V->aeroport_depart=$request->aeroport_depart;
        $V->aeroport_arrive=$request->aeroport_arrive;
        $V->terminal_depart=$request->terminal_depart;
        $V->teminal_arrive=$request->teminal_arrive;
        $V->etat=$request->etat;
        $V->save();
        return response()->json($V);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\vol  $vol
     * @return \Illuminate\Http\Response
     */
    public function show($vol)
    {
        return response()->json(vol::find($vol));
    }

   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\vol  $vol
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $vol)
    {
        $V=vol::find($vol);
        $V->ville_depart=$request->ville_depart;
        $V->ville_arrive=$request->ville_arrive;
        $V->date_depart=$request->date_depart;
        $V->date_arrive=$request->date_arrive;
        $V->heure_depart=$request->heure_depart;
        $V->heure_arrive=$request->heure_arrive;
        $V->aeroport_depart=$request->aeroport_depart;
        $V->aeroport_arrive=$request->aeroport_arrive;
        $V->terminal_depart=$request->terminal_depart;
        $V->teminal_arrive=$request->teminal_arrive;
        $V->etat=$request->etat;
        $V->save();
        return response()->json(vol::find($V));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\vol  $vol
     * @return \Illuminate\Http\Response
     */
    public function destroy($vol)
    {
        $V=vol::find($vol);
        $V->delete();
       return response()->json(vol::find($V));

    }
    public function compter(){
       return response()->json(vol::all()->count());
    }
}
