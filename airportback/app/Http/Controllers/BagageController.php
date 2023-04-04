<?php

namespace App\Http\Controllers;

use App\Models\Bagage;
use Illuminate\Http\Request;

class BagageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list_bagage=Bagage::all();
        return response()->json($list_bagage);
    }

    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $B=new Bagage();
        $B->id_pass=$request->id_pass;
        $B->num_passort=$request->num_passort;
        $B->nom=$request->nom;
        $B->poids=$request->poids;
        $B->save();
        return response()->json($B);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bagage  $bagage
     * @return \Illuminate\Http\Response
     */
    public function show(Bagage $bagage)
    {
        return response()->json(Bagage::find($bagage));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bagage  $bagage
     * @return \Illuminate\Http\Response
     */
    public function edit(Bagage $bagage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bagage  $bagage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bagage $bagage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bagage  $bagage
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bagage $bagage)
    {
        //
    }
    public function compter(){
        return response()->json(Bagage::all()->count());
     }
}
