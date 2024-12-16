import React from 'react';

type Props = {
  className?: string;
};

export default function Logo({ className = '' }: Props) {
  return <img src={''} className={className} alt={'Flatlogic logo'}></img>;
}
