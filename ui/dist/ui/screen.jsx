import { ArrowLeftIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React from 'react';
export var DEFAULT_SCREEN_WIDTH = 440;
export var DEFAULT_SCREEN_HEADER_HEIGHT = 56;
var Screen = function (_a) {
    var _b = _a.width, width = _b === void 0 ? DEFAULT_SCREEN_WIDTH : _b, className = _a.className, children = _a.children;
    return (<div className={clsx('flex flex-col flex-1 min-h-full w-full mx-auto', className)} style={{ maxWidth: width, boxShadow: '-1px 0 0 0 #eee, 1px 0 0 0 #eee' }}>
      <div className="px-5">{children}</div>
    </div>);
};
var ScreenHeader = function (_a) {
    var title = _a.title, extra = _a.extra, action = _a.action, classNames = _a.classNames, _b = _a.bordered, bordered = _b === void 0 ? true : _b;
    return (<header className={clsx('flex justify-between items-center px-[20px]', bordered && 'border-b', classNames === null || classNames === void 0 ? void 0 : classNames.root)} style={{ height: DEFAULT_SCREEN_HEADER_HEIGHT }}>
      {action}
      <h2 className={clsx('text-[16px] absolute left-1/2 -translate-x-1/2', classNames === null || classNames === void 0 ? void 0 : classNames.title)}>
        {title}
      </h2>
      {extra}
    </header>);
};
var ScreenBack = function (_a) {
    var onBack = _a.onBack;
    var router = useRouter();
    var handleBack = function () {
        router.back();
        onBack === null || onBack === void 0 ? void 0 : onBack();
    };
    return (<button onClick={handleBack}>
      <ArrowLeftIcon width={20} height={20}/>
    </button>);
};
Screen.Header = ScreenHeader;
Screen.Back = ScreenBack;
export default Screen;
