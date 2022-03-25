import React, { useState, useCallback } from 'react';
import classnames from 'classnames';

interface OcarinaControllerProps {
  selectedHoles?: number[];
  readonly?: boolean;
  onChange?: (holes: number[]) => void;
};

const OcarinaController: React.FC<OcarinaControllerProps> = ({
  selectedHoles = [],
  readonly = false,
  onChange = () => {},
}: OcarinaControllerProps): React.ReactElement => {
  // TODO: Take advantage of read-only/parent-controlled situation
  const [holes, setHoles]: [number[], ((holes: number[]) => void)] = useState<number[]>([]);
  const toggleHole: (e: React.SyntheticEvent) => void = useCallback((event: React.SyntheticEvent) => {
    if (readonly) { return; }
    const target: HTMLElement = event.target as HTMLElement;
    const holeNumber: number = +target.dataset.number!
    let newHoles = [
      ...holes,
      holeNumber,
    ].sort((a, b) => a - b);
    if (holes.includes(holeNumber)) {
      newHoles = holes.filter((hole: number) => hole !== holeNumber).sort((a, b) => a - b);
    }

    setHoles(newHoles);
    onChange(newHoles);
  }, [holes, setHoles, onChange]);
  const holesToUse: number[] = readonly ? selectedHoles : holes;

  return (
    <div className="ocarina-container">
      <svg version="1.1" viewBox="0.0 0.0 648.0 296.0" fill="none" stroke="none" strokeLinecap="square" strokeMiterlimit="10">
         <clipPath id="p.0">
            <path d="m0 0l648.0 0l0 296.0l-648.0 0l0 -296.0z" clipRule="nonzero" />
         </clipPath>
         <g clipPath="url(#p.0)">
            <path fill="#000000" fillOpacity="0.0" d="m0 0l648.0 0l0 296.0l-648.0 0z" fillRule="evenodd" />
            <path fill="#3957ed" d="m165.72334 290.33725l-57.30126 -7.390991l0 0c-3.7994232 -0.4900818 -7.2476654 -2.4692688 -9.586151 -5.5021973c-2.3384857 -3.0329285 -3.3756638 -6.871155 -2.8833542 -10.670288l19.403603 -149.73833c5.340576E-5 -3.8909912E-4 4.119873E-4 -6.713867E-4 8.087158E-4 -6.1798096E-4l85.95194 11.087242l0 0c3.9672852E-4 4.5776367E-5 6.713867E-4 4.119873E-4 6.2561035E-4 8.087158E-4l-19.40422 149.73753l0 0c-1.025177 7.9112854 -8.270096 13.497345 -16.181992 12.476837z" fillRule="evenodd" />
            <defs>
               <radialGradient id="p.1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(24.87950481352209 -3.7116028247341397 3.7116028247341397 24.87950481352209 0.0 0.0)" spreadMethod="pad" cx="-0.6112456308849774" cy="2.198681557761016" fx="-0.6112456308849774" fy="2.198681557761016" r="24.879505157470703">
                  <stop offset="0.0" stopColor="#5a72e8" />
                  <stop offset="1.0" stopColor="#0026e8" />
               </radialGradient>
            </defs>
            <path fill="url(#p.1)" d="m7.807929 156.54495l0 0c-8.201646 -54.993637 116.3478 -119.147354 278.189 -143.29134l0 0c161.84116 -24.143976 299.68808 0.8646221 307.88974 55.858265l0 0c8.20166 54.993645 -116.34778 119.14736 -278.18896 143.29135l0 0c-161.84117 24.143967 -299.6881 -0.864624 -307.88977 -55.858276z" fillRule="evenodd" />
            <defs>
               <radialGradient id="p.2" gradientUnits="userSpaceOnUse" gradientTransform="matrix(6.981923793272553 1.0440705433294972 -1.0440705433294972 6.981923793272553 0.0 0.0)" spreadMethod="pad" cx="25.11243296314204" cy="30.886931360247047" fx="25.11243296314204" fy="30.886931360247047" r="6.981923580169678">
                  <stop offset="0.0" stopColor="#f2f2f2" />
                  <stop offset="1.0" stopColor="#a6a6a6" />
               </radialGradient>
            </defs>
            <path fill="url(#p.2)" d="m99.32118 219.22368l92.25197 13.795273l-4.724411 31.496063l-92.25197 -13.795273z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(1) })} data-number="1" fill="#000000" d="m54.31261 153.2926l0 0c-1.6612053 -11.176163 6.052189 -21.582901 17.228344 -23.244095l0 0c5.3669815 -0.79774475 10.831039 0.56921387 15.190155 3.8001556c4.3591156 3.2309418 7.2562027 8.061203 8.05394 13.428192l0 0c1.6612015 11.176147 -6.0521927 21.582886 -17.228348 23.244095l0 0c-11.176155 1.6611938 -21.58289 -6.0522003 -23.244091 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(2) })} data-number="2" fill="#000000" d="m116.16916 131.97298l0 0c-1.6612015 -11.176155 6.0521927 -21.582886 17.228348 -23.244087l0 0c5.366974 -0.79774475 10.831039 0.5692215 15.190155 3.8001633c4.3591156 3.2309418 7.256195 8.061203 8.05394 13.428177l0 0c1.6611938 11.176163 -6.0522003 21.582901 -17.228348 23.244095l0 0c-11.176163 1.6612091 -21.582893 -6.052185 -23.244095 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(3) })} data-number="3" fill="#000000" d="m170.37961 104.99269l0 0c-1.6611938 -11.176155 6.0522003 -21.582893 17.228348 -23.244095l0 0c5.366974 -0.7977371 10.831039 0.5692215 15.190155 3.8001633c4.3591156 3.2309418 7.2562103 8.061203 8.05394 13.4281845l0 0c1.6612091 11.176155 -6.052185 21.582893 -17.228348 23.244095l0 0c-11.176147 1.6612015 -21.582886 -6.0521927 -23.244095 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(4) })} data-number="4" fill="#000000" d="m204.80745 58.48964l0 0c-1.6611938 -11.176159 6.0522003 -21.582893 17.228348 -23.244095l0 0c5.366989 -0.7977371 10.831039 0.5692215 15.190155 3.8001633c4.3591156 3.2309418 7.2562103 8.061203 8.05394 13.428181l0 0c1.6612091 11.176159 -6.052185 21.58289 -17.228348 23.244099l0 0c-11.176147 1.6612015 -21.582886 -6.0521927 -23.244095 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(5) })} data-number="5" fill="#000000" d="m238.61812 177.75876l0 0c-1.6612091 -11.176163 6.052185 -21.582901 17.228348 -23.244095l0 0c5.366974 -0.79774475 10.831024 0.56921387 15.190155 3.8001556c4.3591003 3.2309418 7.256195 8.061203 8.053925 13.428192l0 0c1.6612244 11.176147 -6.052185 21.582886 -17.228333 23.244095l0 0c-11.176163 1.6611938 -21.582901 -6.0522003 -23.244095 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(6) })} data-number="6" fill="#000000" d="m303.10825 132.18654l0 0c-1.6611938 -11.176155 6.0522156 -21.582886 17.228363 -23.244095l0 0c5.366974 -0.7977371 10.831024 0.5692215 15.190155 3.8001633c4.3591003 3.2309418 7.256195 8.061203 8.053925 13.4281845l0 0c1.6612244 11.176163 -6.052185 21.582886 -17.228333 23.244095l0 0c-11.176147 1.6612091 -21.582886 -6.052185 -23.24411 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(7) })} data-number="7" fill="#000000" d="m369.21136 110.40847l0 0c-1.6611938 -11.176163 6.052185 -21.582893 17.228333 -23.244095l0 0c5.3670044 -0.7977371 10.831055 0.5692215 15.190155 3.8001633c4.359131 3.2309418 7.2562256 8.061203 8.053955 13.428177l0 0c1.6611938 11.176163 -6.052185 21.582893 -17.228363 23.244095l0 0c-11.176147 1.6612091 -21.582886 -6.052185 -23.24408 -17.22834z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(8) })} data-number="8" fill="#000000" d="m448.62964 113.20221l0 0c-1.6612244 -11.176155 6.052185 -21.582893 17.228333 -23.244095l0 0c5.366974 -0.7977371 10.831055 0.5692215 15.190155 3.8001633c4.3591003 3.2309418 7.256195 8.061203 8.053925 13.4281845l0 0c1.6612244 11.176155 -6.052185 21.582886 -17.228333 23.244095l0 0c-11.176147 1.6611938 -21.582886 -6.0521927 -23.24408 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(9) })} data-number="9" fill="#000000" d="m38.63706 248.963l0 0c-1.6612015 -11.176147 6.0521927 -21.582886 17.228348 -23.244095l0 0c5.3669777 -0.7977295 10.831043 0.5692291 15.190151 3.800171c4.3591156 3.2309418 7.2562027 8.061203 8.05394 13.428177l0 0c1.6612091 11.176163 -6.052185 21.582901 -17.228344 23.244095l0 0c-11.176155 1.6611938 -21.58289 -6.052185 -23.244095 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(10) })} data-number="10" fill="#000000" d="m209.0813 254.33916l0 0c-1.6612091 -11.176163 6.052185 -21.582901 17.228348 -23.244095l0 0c5.366974 -0.79774475 10.831039 0.56921387 15.190155 3.8001556c4.3591156 3.2309418 7.256195 8.061203 8.05394 13.428192l0 0c1.6611938 11.176163 -6.0522003 21.58287 -17.228348 23.244095l0 0c-11.176163 1.6611938 -21.582901 -6.052185 -23.244095 -17.228348z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(11) })} data-number="11" fill="#000000" d="m149.46326 167.85825l0 0c-0.8610382 -5.7489777 3.10141 -11.107468 8.850403 -11.968506l0 0c2.7607574 -0.41349792 5.572693 0.28666687 7.81723 1.9464417c2.244522 1.6597595 3.7377777 4.1431885 4.1512604 6.903946l0 0c0.86105347 5.7489777 -3.10141 11.107468 -8.850388 11.968506l0 0c-5.7489777 0.8610382 -11.107468 -3.10141 -11.968506 -8.850388z" fillRule="evenodd" />
            <path onClick={toggleHole} className={classnames("hole", { active: holesToUse.includes(12) })} data-number="12" fill="#000000" d="m281.9552 98.3644l0 0c-0.86105347 -5.7489853 3.10141 -11.10746 8.850403 -11.968506l0 0c2.7607422 -0.4134903 5.572693 0.28666687 7.8171997 1.9464417c2.2445374 1.6597672 3.737793 4.143196 4.1512756 6.9039536l0 0c0.86105347 5.7489777 -3.10141 11.10746 -8.850372 11.968506l0 0c-5.748993 0.8610382 -11.107483 -3.1014175 -11.968506 -8.850395z" fillRule="evenodd" />
         </g>
      </svg>
    </div>
  );
}

export default OcarinaController;
