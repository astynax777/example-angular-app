import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Item } from '../item/shared/item.model';
import { ItemService } from '../item/item.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-add-item',
  standalone: false,
  
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  addItemForm: FormGroup;
  loading = false;

  // Inject ItemService and FormBuilder (FormBuilder is here just for the commented-out example below)
  constructor(private fb: FormBuilder,
    private itemService: ItemService,
    private notificationService: NotificationService) {
    this.addItemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
    });

    /*
    // This is the same thing as the above but saves a little typing
    // https://angular.dev/guide/forms/reactive-forms#using-the-formbuilder-service-to-generate-controls
    this.addItemForm = fb.group({
      name: ['', [Validators.required]],
      description: ['', []],
      price: [null, [Validators.required, Validators.min(0)]],
    });
    */
  }

  submitAddItemForm(evt: SubmitEvent, form: FormGroupDirective) {
    // Make sure the form is valid
    if (this.addItemForm.valid) {
      // Get the form as an object { name, description, price }
      // and implicitly cast it as an Item
      // Note - I typically create DTOs for this that only have the fields I use
      // But we're being lazy here
      const newItem = this.addItemForm.value as Item;
      this.loading = true;
      this.itemService.add(newItem).subscribe(item => {
        // Let the user know it was added.
        this.notificationService.show(`Item "${item.name}" with id ${item.id} created successfully!`);
        this.loading = false;

        // Clear the form
        this.addItemForm.reset();
        // Reset the validators
        form.resetForm();
      });
    }
  }
}
