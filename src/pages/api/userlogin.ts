import type { NextApiRequest, NextApiResponse } from 'next'
import { UserLoginComponent } from '../components/types/user'
import {useState,useEffect} from 'react'

type Data = {
  id: string,
  pass: string
}



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserLoginComponent>
) {
  const data = req.body.data
}
