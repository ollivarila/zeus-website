import { NextRequest, NextResponse } from 'next/server'

export default function hello(
  _: NextRequest,
  res: NextResponse<{ m: string }>,
) {}
