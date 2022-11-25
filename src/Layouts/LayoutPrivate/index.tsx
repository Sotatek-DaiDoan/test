import React from 'react'
import withAuth from 'Guards/Auth/hoc'
import LayoutCommon from 'Layouts/LayoutCommon'

const LayoutPrivate: React.FC<React.PropsWithChildren> = withAuth(LayoutCommon)

export default LayoutPrivate
