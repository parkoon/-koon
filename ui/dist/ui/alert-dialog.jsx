import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import React from 'react';
import { cn } from '@/libs/cn';
import { Button } from './button';
var AlertDialog = function (_a) {
    var title = _a.title, description = _a.description, open = _a.open, onOk = _a.onOk, onCancel = _a.onCancel, classNames = _a.classNames, okButtonProps = _a.okButtonProps, cancelButtonProps = _a.cancelButtonProps, _b = _a.hideCancelButton, hideCancelButton = _b === void 0 ? false : _b, _c = _a.okText, okText = _c === void 0 ? 'Confirm' : _c, _d = _a.cancelText, cancelText = _d === void 0 ? 'Cancel' : _d;
    return (<AlertDialogPrimitive.Root open={open}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"/>
        <AlertDialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-white p-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
          {title && (<AlertDialogPrimitive.Title className={cn('text-lg font-bold text-center mb-2', classNames === null || classNames === void 0 ? void 0 : classNames.title)}>
              {title}
            </AlertDialogPrimitive.Title>)}
          {description && (<AlertDialogPrimitive.Description className={cn('mb-5 text-center', classNames === null || classNames === void 0 ? void 0 : classNames.description)}>
              {description}
            </AlertDialogPrimitive.Description>)}

          <div className="flex gap-2">
            {!hideCancelButton && (<Button variant="outlined" block onClick={onCancel} {...cancelButtonProps}>
                {cancelText}
              </Button>)}

            <Button variant="primary" block onClick={onOk} {...okButtonProps}>
              {okText}
            </Button>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>);
};
export default AlertDialog;
